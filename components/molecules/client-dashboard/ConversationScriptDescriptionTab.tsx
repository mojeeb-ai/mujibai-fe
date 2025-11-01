import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConversationScriptDescriptionTab() {
  return (
    <div>
      <Card className=" my-10 p-0 dark:bg-[#00143473] border-none">
        <CardHeader className="dark:bg-[#00143473] py-2">
          <CardTitle className="text-xl font-semibold">
            Description Script
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex justify-center items-center flex-col gap-2">
            <h3 className="text-xl font-semibold">No description available</h3>
            <p className="text-base font-normal">
              Start by adding your first description
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="w-full py-8 flex justify-center items-center">
        <Button className="rounded-full w-40 py-2 text-sm text-foreground">
          Edit Description
        </Button>
      </div>
    </div>
  );
}
