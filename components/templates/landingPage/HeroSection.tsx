import Header from "../../organisms/Header";
import { Button } from "../../ui/button";
import SessionControls from "../../organisms/SessionControls";
export default function HeroSection({
  startSession,
  stopSession,
  sendClientEvent,
  sendTextMessage,
  events,
  isSessionActive,
}: {
  startSession: () => void;
  stopSession: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendClientEvent: (message: any) => void;
  sendTextMessage: (text: string) => void;
  events: unknown[];
  isSessionActive: boolean;
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute bottom-0 h-[60%] w-full bg-gradient-to-t from-primary/40 dark:from-primary/20 from-[40%] to-transparent -z-10"></div>
      <div className="relative z-50">
        <Header />
      </div>
      <div className="flex justify-center items-center h-full px-6">
        <div
          className="
            mx-auto flex flex-col items-center text-center
            gap-8
            w-full
            max-w-[912px]    /* matches Figma width */
            mt-32 sm:mt-24 md:mt-20
          "
        >
          {/* ====== Headline ====== */}
          <h1
            className="
              font-bold leading-tight text-gray-900 dark:text-white
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            "
          >
            Lorem Ipsum Is Simply Dummy Text Of The{" "}
            <span className="text-primary">Printing.</span>
          </h1>

          {/* ====== Paragraph ====== */}
          <p
            className="
              text-gray-600 dark:text-gray-300
              text-base sm:text-lg md:text-xl
              max-w-[700px]
            "
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>

          {/* ====== Buttons ====== */}
          <div
            className="
              flex flex-col sm:flex-row justify-center gap-4 mt-4
              h-auto sm:h-[70px]
            "
          >
            <Button
              className="
                px-10 sm:px-14 py-6 rounded-full font-medium
                bg-primary text-white hover:bg-primary/90
                text-base sm:text-lg transition
                shadow-md
              "
            >
              Get Started
            </Button>
            <SessionControls
              startSession={startSession}
              stopSession={stopSession}
              sendClientEvent={sendClientEvent}
              sendTextMessage={sendTextMessage}
              serverEvents={events}
              isSessionActive={isSessionActive}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
