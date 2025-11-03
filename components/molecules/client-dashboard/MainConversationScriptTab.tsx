import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MainConversationScriptTab({
  t,
  locale,
}: {
  t: (key: string) => string;
  locale: string;
}) {
  return (
    <div>
      <Card className=" my-10 p-0 dark:bg-[#00143473] border-none">
        <CardHeader className="dark:bg-[#00143473] py-2">
          <CardTitle
            className={`text-xl font-semibold ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("conversationScript")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex justify-center items-center flex-col gap-2">
            <h3 className="text-xl font-semibold">
              {t("noConversationScriptAvailable")}
            </h3>
            <p className="text-base font-normal">
              {t("startByAddingYourFirstConversationScript")}
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="w-full py-8 flex justify-center items-center gap-2">
        <Button className="rounded-full w-40 py-2 text-sm text-foreground">
          {t("addNewLine")}
        </Button>

        <Button
          variant="outline"
          className="
                    relative cursor-pointer rounded-full border-2 border-primary
                    bg-transparent px-6 py-2 text-sm font-semibold text-primary
                    transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                    overflow-hidden
                    before:absolute before:inset-0 before:m-auto before:h-[50px] before:w-[50px]
                    before:scale-0 before:rounded-full before:bg-primary before:z-0
                    before:transition-all before:duration-600 before:ease-[cubic-bezier(0.23,1,0.32,1)]
                    hover:before:scale-[3] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
                    active:scale-100
                  "
        >
          <span className="relative z-[1]">{t("createScript")}</span>
        </Button>
      </div>
    </div>
  );
}
