import { useState } from "react";
import { CloudLightning, CloudOff } from "react-feather";
import { Button } from "@/components/ui/button";

function SessionStopped({ startSession }) {
  const [isActivating, setIsActivating] = useState(false);

  function handleStartSession() {
    if (isActivating) return;

    setIsActivating(true);
    startSession();
  }

  return (
    <Button
      onClick={handleStartSession}
      className="
                px-10 sm:px-14 py-6 rounded-full font-medium
                bg-primary text-white hover:bg-primary/90
                text-base sm:text-lg transition
                shadow-md
              "
      icon={<CloudLightning height={16} />}
    >
      {isActivating ? "Listen now..." : "Listen now"}
    </Button>
  );
}

function SessionActive({ stopSession }) {
  return (
    <Button
      className="
                px-10 sm:px-14 py-6 rounded-full font-medium
                bg-primary text-white hover:bg-primary/90
                text-base sm:text-lg transition
                shadow-md
              "
      onClick={stopSession}
      icon={<CloudOff height={16} />}
    >
      Stop Listen
    </Button>
  );
}

export default function SessionControls({
  startSession,
  stopSession,
  sendClientEvent,
  serverEvents,
  isSessionActive,
}) {
  return (
    <>
      {isSessionActive ? (
        <SessionActive
          stopSession={stopSession}
          sendClientEvent={sendClientEvent}
          serverEvents={serverEvents}
        />
      ) : (
        <SessionStopped startSession={startSession} />
      )}
    </>
  );
}
