"use client";
import { useEffect, useRef, useCallback, useMemo } from "react";
import { io, Socket } from "socket.io-client";

interface UseRealTimeReturn {
  emit: (event: string, data?: unknown) => void;
  on: (event: string, callback: (...args: unknown[]) => void) => void;
  off: (event: string, callback?: (...args: unknown[]) => void) => void;
  connected: boolean;
}

/**
 * useRealTime — custom hook to manage real-time operations via Socket.io
 * with enhanced error handling and reconnection logic
 */
export default function useRealTime(): UseRealTimeReturn {
  const socketRef = useRef<Socket | null>(null);
  const connectedRef = useRef<boolean>(false);

  const SOCKET_CONFIG = useMemo(
    () => ({
      url:
        process.env.NEXT_PUBLIC_NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
          : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION,
      options: {
        timeout: 10000,
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5,
      },
    }),
    []
  );

  useEffect(() => {
    const socket = io(SOCKET_CONFIG.url, SOCKET_CONFIG.options);

    socketRef.current = socket;

    const handleConnect = () => {
      connectedRef.current = true;
    };

    const handleDisconnect = () => {
      connectedRef.current = false;
    };

    const handleConnectError = () => {
      connectedRef.current = false;
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);

      socket.disconnect();
      connectedRef.current = false;
    };
  }, [SOCKET_CONFIG]);

  /** Emit an event to the server with error handling */

  const emit = useCallback((event: string, data?: unknown) => {
    if (socketRef.current && connectedRef.current) {
      try {
        socketRef.current.emit(event, data);
      } catch (error) {
        console.log(`Failed to emit event ${event}:`, error);
      }
    } else {
      console.warn(`Socket not connected, cannot emit ${event}`);
    }
  }, []);

  /** Subscribe to an event */
  const on = useCallback(
    (event: string, callback: (...args: unknown[]) => void) => {
      socketRef.current?.on(event, callback);
    },
    []
  );

  /** Unsubscribe from an event */
  const off = useCallback(
    (event: string, callback?: (...args: unknown[]) => void) => {
      socketRef.current?.off(event, callback);
    },
    []
  );

  return {
    emit,
    on,
    off,
    connected: connectedRef.current,
  };
}
