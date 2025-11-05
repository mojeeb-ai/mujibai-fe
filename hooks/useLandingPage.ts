import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

/** Hook for handling realtime Arabic-only chat logic */
export default function useLandingPage() {
  const { theme } = useTheme();
  const currentTheme = theme;
  const [isSessionActive, setIsSessionActive] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]);
  const [dataChannel, setDataChannel] = useState<RTCDataChannel | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  /** Start realtime session */
  async function startSession() {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_NODE_ENV === "development"
          ? `${process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT}/api/v1/core/token`
          : `${process.env.NEXT_PUBLIC_BACKEND_PRODUCTION}/api/v1/core/token`
      );
      const data = await res.json();
      const EPHEMERAL_KEY = data.token;

      const pc = new RTCPeerConnection();
      peerConnection.current = pc;

      audioElement.current = document.createElement("audio");
      audioElement.current.autoplay = true;
      pc.ontrack = (e) => {
        audioElement.current!.srcObject = e.streams[0];
      };

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      pc.addTrack(stream.getTracks()[0]);

      const dc = pc.createDataChannel("oai-events");
      setDataChannel(dc);

      // Create SDP offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const response = await fetch(
        "https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview",
        {
          method: "POST",
          body: offer.sdp,
          headers: {
            Authorization: `Bearer ${EPHEMERAL_KEY}`,
            "Content-Type": "application/sdp",
          },
        }
      );

      const answerSDP = await response.text();
      await pc.setRemoteDescription({ type: "answer", sdp: answerSDP });
    } catch (error) {
      console.error("Session start error:", error);
    }
  }

  /** Stop realtime session */
  function stopSession() {
    if (dataChannel) dataChannel.close();
    if (peerConnection.current) {
      peerConnection.current.getSenders().forEach((s) => s.track?.stop());
      peerConnection.current.close();
    }
    setIsSessionActive(false);
    setDataChannel(null);
    peerConnection.current = null;
  }

  /** Send event to data channel */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function sendClientEvent(message: any) {
    if (!dataChannel) return console.error("No data channel!");
    message.event_id = message.event_id || crypto.randomUUID();
    const msgStr = JSON.stringify(message);
    const chunkSize = 1200;
    for (let i = 0; i < msgStr.length; i += chunkSize) {
      const chunk = msgStr.slice(i, i + chunkSize);
      dataChannel.send(chunk);
    }
    message.timestamp = new Date().toLocaleTimeString();
    setEvents((prev) => [message, ...prev]);
  }

  /** Detects if text is Arabic */
  function isArabic(text: string) {
    return /[\u0600-\u06FF]/.test(text);
  }

  /** Send user text message (Arabic only) */
  function sendTextMessage(text: string) {
    if (!isArabic(text)) {
      const warning = {
        type: "system.message",
        role: "system",
        content: [{ type: "text", text: "يرجى التحدث باللغة العربية فقط" }],
        timestamp: new Date().toLocaleTimeString(),
      };
      setEvents((prev) => [warning, ...prev]);
      return;
    }

    const event = {
      type: "conversation.item.create",
      item: {
        type: "message",
        role: "user",
        content: [{ type: "input_text", text }],
      },
    };

    sendClientEvent(event);
    sendClientEvent({ type: "response.create" });
  }

  /** Handle data channel messages */
  useEffect(() => {
    if (!dataChannel) return;

    dataChannel.addEventListener("open", () => {
      setIsSessionActive(true);
      setEvents([]);
    });

    let buffer = "";
    dataChannel.addEventListener("message", (e) => {
      buffer += e.data;
      try {
        const parsed = JSON.parse(buffer);
        parsed.timestamp = new Date().toLocaleTimeString();
        setEvents((prev) => [parsed, ...prev]);
        buffer = "";
      } catch {}
    });
  }, [dataChannel]);

  return {
    startSession,
    stopSession,
    sendClientEvent,
    sendTextMessage,
    isSessionActive,
    events,
    currentTheme,
  };
}
