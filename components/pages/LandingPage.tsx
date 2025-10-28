"use client";
import HeroSection from "../templates/landingPage/HeroSection";
import FeaturesSection from "../templates/landingPage/FeaturesSection";
import TargetedSectorsSection from "../templates/landingPage/TargetedSectorsSection";
import WhyChooseUs from "../templates/landingPage/WhyChooseUs";
import PricingSection from "../templates/landingPage/PricingSection";
import AboutUsSection from "../templates/landingPage/AboutUsSection";
import ContactUsSection from "../templates/landingPage/ContactUsSection";
import Footer from "../templates/Footer";
import { useTheme } from "next-themes";
import useRealTime from "@/hooks/useRealTime";
import { useEffect, useRef, useState, useCallback } from "react";

interface AudioState {
  isListening: boolean;
  isProcessing: boolean;
  isPlaying: boolean;
  transcribedText: string;
  replyText: string;
}

export default function LandingPage() {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const { emit, on, off, connected } = useRealTime();

  const [audioState, setAudioState] = useState<AudioState>({
    isListening: false,
    isProcessing: false,
    isPlaying: false,
    transcribedText: "",
    replyText: "",
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  // تنظيف الموارد
  const cleanupResources = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    mediaRecorderRef.current = null;
    audioChunksRef.current = [];
  }, []);

  useEffect(() => {
    const handleIntroAudio = async (msg: any) => {
      try {
        console.log("🔊 استلام الصوت الترحيبي");
        setAudioState((prev) => ({ ...prev, isPlaying: true }));

        const audioData = Uint8Array.from(atob(msg.data), (c) =>
          c.charCodeAt(0)
        );
        const blob = new Blob([audioData], { type: msg.mime || "audio/mp3" });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);

        audio.onended = () => {
          console.log("🔊 انتهى الصوت الترحيبي، جاري تفعيل الاستماع...");
          setAudioState((prev) => ({ ...prev, isPlaying: false }));
          startListening();
        };

        audio.onerror = (e) => {
          console.error("❌ خطأ في تشغيل الصوت الترحيبي:", e);
          setAudioState((prev) => ({ ...prev, isPlaying: false }));
        };

        await audio.play();
      } catch (error) {
        console.error("❌ خطأ في معالجة الصوت الترحيبي:", error);
        setAudioState((prev) => ({ ...prev, isPlaying: false }));
      }
    };

    const handleProcessingStarted = () => {
      console.log("⚙️ بدأت معالجة الطلب...");
      setAudioState((prev) => ({ ...prev, isProcessing: true }));
    };

    const handleTranscribedText = (msg: any) => {
      console.log("🗣️ المستخدم قال:", msg.text);
      setAudioState((prev) => ({ ...prev, transcribedText: msg.text }));
    };

    const handleReplyText = (msg: any) => {
      console.log("🤖 رد المساعد:", msg.text);
      setAudioState((prev) => ({ ...prev, replyText: msg.text }));
    };

    const audioQueue: string[] = [];
    let isPlayingAudio = false;

    const handleAudioChunk = async (msg: any) => {
      if (!msg.isReply) return;

      console.log(`🎧 استلام شريحة صوتية رقم ${msg.chunkIndex}`);

      const audioData = Uint8Array.from(atob(msg.data), (c) => c.charCodeAt(0));
      const blob = new Blob([audioData], { type: "audio/mp3" });
      const url = URL.createObjectURL(blob);

      audioQueue.push(url);

      if (!isPlayingAudio) {
        playNextInQueue();
      }
    };

    const playNextInQueue = async () => {
      if (audioQueue.length === 0) {
        isPlayingAudio = false;
        setAudioState((prev) => ({ ...prev, isPlaying: false }));
        return;
      }

      isPlayingAudio = true;
      setAudioState((prev) => ({ ...prev, isPlaying: true }));

      const url = audioQueue.shift()!;
      const audio = new Audio(url);

      audio.onended = () => {
        console.log("🔊 انتهى تشغيل شريحة صوتية");
        URL.revokeObjectURL(url);
        playNextInQueue();
      };

      audio.onerror = (e) => {
        console.error("❌ خطأ في تشغيل شريحة صوتية:", e);
        URL.revokeObjectURL(url);
        playNextInQueue();
      };

      try {
        await audio.play();
      } catch (err) {
        console.error("⚠️ خطأ أثناء التشغيل:", err);
        playNextInQueue();
      }
    };

    const handleReplyEnd = () => {
      console.log("✅ انتهى الرد الصوتي");
      setAudioState((prev) => ({
        ...prev,
        isProcessing: false,
        isListening: false,
      }));
      cleanupResources();
    };

    const handleError = (msg: any) => {
      console.error("❌ خطأ من السيرفر:", msg.message);
      setAudioState((prev) => ({
        ...prev,
        isProcessing: false,
        isListening: false,
      }));
      cleanupResources();
    };

    on("intro_audio", handleIntroAudio);
    on("processing_started", handleProcessingStarted);
    on("transcribed_text", handleTranscribedText);
    on("reply_text", handleReplyText);
    on("audio_chunk", handleAudioChunk);
    on("reply_end", handleReplyEnd);
    on("error", handleError);

    return () => {
      off("intro_audio", handleIntroAudio);
      off("processing_started", handleProcessingStarted);
      off("transcribed_text", handleTranscribedText);
      off("reply_text", handleReplyText);
      off("audio_chunk", handleAudioChunk);
      off("reply_end", handleReplyEnd);
      off("error", handleError);
    };
  }, [on, off, cleanupResources]);

  const startListening = useCallback(async () => {
    if (!connected) {
      console.error("❌ غير متصل بالسيرفر");
      return;
    }

    try {
      cleanupResources();

      console.log("🎤 طلب إذن المايكروفون...");
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
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          const arrayBuffer = await event.data.arrayBuffer();
          const base64Data = btoa(
            String.fromCharCode(...new Uint8Array(arrayBuffer))
          );

          emit("audio_chunk", { data: base64Data });
        }
      };

      mediaRecorder.onstop = () => {
        console.log("⏹️ توقف التسجيل، جاري الإرسال...");
        emit("end_turn");
      };

      mediaRecorder.start(250);
      setAudioState((prev) => ({ ...prev, isListening: true }));

      console.log("🎤 جاري الاستماع...");
    } catch (err) {
      console.error("🚫 مشكلة في المايكروفون:", err);
      setAudioState((prev) => ({ ...prev, isListening: false }));
    }
  }, [emit, connected, cleanupResources]);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && audioState.isListening) {
      mediaRecorderRef.current.stop();
      setAudioState((prev) => ({ ...prev, isListening: false }));
      console.log("🛑 تم إيقاف التسجيل...");
    }
  }, [audioState.isListening]);

  const handleListenMethod = useCallback(() => {
    if (audioState.isProcessing || audioState.isPlaying) {
      console.log("⏳ النظام مشغول حالياً...");
      return;
    }

    if (audioState.isListening) {
      stopListening();
    } else {
      console.log("👋 طلب رسالة ترحيب...");
      emit("intro_request");
    }
  }, [audioState, emit, stopListening]);

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <HeroSection handleListenMethod={handleListenMethod} />
      <FeaturesSection />
      <TargetedSectorsSection theme={currentTheme || "dark"} />
      <WhyChooseUs />
      <PricingSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer theme={currentTheme || "dark"} />
    </main>
  );
}
