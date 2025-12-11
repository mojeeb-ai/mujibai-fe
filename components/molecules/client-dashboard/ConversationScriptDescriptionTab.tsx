import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConversationScriptDescriptionTab({
  t,
  locale,
}: {
  t: (key: string) => string;
  locale: string;
}) {
  return (
    <div>
      <Card className="my-10 border-none p-0 dark:bg-[#00143473]">
        <CardHeader className="py-2 dark:bg-[#00143473]">
          <CardTitle
            className={`${
              locale === 'ar'
                ? 'text-right text-xl font-semibold'
                : 'text-left text-xl font-semibold'
            }`}
          >
            {t('descriptionScript')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-xl font-semibold">
              {t('noDescriptionAvailable')}
            </h3>
            <p className="text-base font-normal">
              {t('startByAddingYourFirstDescription')}
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="flex w-full items-center justify-center py-8">
        <Button className="text-foreground w-40 rounded-full py-2 text-sm">
          {t('editDescription')}
        </Button>
      </div>
    </div>
  );
}
