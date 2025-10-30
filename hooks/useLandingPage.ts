import { useCallback, useEffect, useRef, useState } from "react";
import useRealTime from "@/hooks/useRealTime";
import { useTheme } from "next-themes";

interface AudioState {
  isListening: boolean;
  isProcessing: boolean;
  isPlaying: boolean;
  transcribedText: string;
  replyText: string;
}

/** Handles all voice assistant logic */
export default function useLandingPage() {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const { emit, on, off } = useRealTime();
  const [state, setState] = useState<AudioState>({
    isListening: false,
    isProcessing: false,
    isPlaying: false,
    transcribedText: "",
    replyText: "",
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const queueRef = useRef<string[]>([]);
  const playingRef = useRef(false);

  /** Stop mic & cleanup resources */
  const cleanup = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    mediaRecorderRef.current = null;
  }, []);

  /** Play next audio in queue */
  const playNext = useCallback(() => {
    if (playingRef.current || queueRef.current.length === 0) return;
    playingRef.current = true;
    const url = queueRef.current.shift()!;
    const audio = new Audio(url);

    audio.onended = () => {
      URL.revokeObjectURL(url);
      playingRef.current = false;
      playNext();
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      playingRef.current = false;
      playNext();
    };
    audio.play().catch(() => {
      playingRef.current = false;
      playNext();
    });
  }, []);

  /** Start mic recording */
  const startListening = useCallback(async () => {
    try {
      cleanup();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });

      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = async (e) => {
        if (e.data.size > 0) {
          const buf = await e.data.arrayBuffer();
          const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
          emit("audio_chunk", { data: b64 });
        }
      };

      mediaRecorder.onstop = () => emit("end_turn");
      mediaRecorder.start(250);
      setState((s) => ({ ...s, isListening: true }));
    } catch {
      setState((s) => ({ ...s, isListening: false }));
    }
  }, [emit, cleanup]);

  /** Stop mic recording */
  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && state.isListening) {
      mediaRecorderRef.current.stop();
      setState((s) => ({ ...s, isListening: false }));
    }
  }, [state.isListening]);

  /** Play received intro */
  const handleIntroAudio = useCallback(
    async (msg: any) => {
      try {
        setState((s) => ({ ...s, isPlaying: true }));
        const data = Uint8Array.from(atob(msg.data), (c) => c.charCodeAt(0));
        const blob = new Blob([data], { type: msg.mime || "audio/mp3" });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.onended = () => {
          URL.revokeObjectURL(url);
          setState((s) => ({ ...s, isPlaying: false }));
          startListening();
        };
        await audio.play();
      } catch {
        setState((s) => ({ ...s, isPlaying: false }));
      }
    },
    [startListening]
  );

  /** Handle server events */
  useEffect(() => {
    const handleProcessing = () =>
      setState((s) => ({ ...s, isProcessing: true }));
    const handleTranscribed = (m: any) =>
      setState((s) => ({ ...s, transcribedText: m.text }));
    const handleReply = (m: any) =>
      setState((s) => ({ ...s, replyText: m.text }));
    const handleChunk = (m: any) => {
      if (!m.isReply) return;
      const data = Uint8Array.from(atob(m.data), (c) => c.charCodeAt(0));
      const blob = new Blob([data], { type: "audio/mp3" });
      const url = URL.createObjectURL(blob);
      queueRef.current.push(url);
      playNext();
    };
    const handleEnd = () => {
      setState((s) => ({ ...s, isProcessing: false, isListening: false }));
      cleanup();
    };
    const handleError = () => {
      setState((s) => ({ ...s, isProcessing: false, isListening: false }));
      cleanup();
    };

    on("intro_audio", handleIntroAudio);
    on("processing_started", handleProcessing);
    on("transcribed_text", handleTranscribed);
    on("reply_text", handleReply);
    on("audio_chunk", handleChunk);
    on("reply_end", handleEnd);
    on("error", handleError);

    return () => {
      off("intro_audio", handleIntroAudio);
      off("processing_started", handleProcessing);
      off("transcribed_text", handleTranscribed);
      off("reply_text", handleReply);
      off("audio_chunk", handleChunk);
      off("reply_end", handleEnd);
      off("error", handleError);
    };
  }, [on, off, handleIntroAudio, cleanup, playNext]);

  /** Handle listen button */
  const handleListen = useCallback(() => {
    if (state.isProcessing || state.isPlaying) return;
    if (state.isListening) stopListening();
    else emit("intro_request");
  }, [state, emit, stopListening]);

  return { state, handleListen, currentTheme };
}
