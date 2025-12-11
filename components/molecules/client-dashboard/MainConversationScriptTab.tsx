import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MainConversationScriptTab({
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
            className={`text-xl font-semibold ${
              locale === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            {t('conversationScript')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-xl font-semibold">
              {t('noConversationScriptAvailable')}
            </h3>
            <p className="text-base font-normal">
              {t('startByAddingYourFirstConversationScript')}
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="flex w-full items-center justify-center gap-2 py-8">
        <Button className="text-foreground w-40 rounded-full py-2 text-sm">
          {t('addNewLine')}
        </Button>

        <Button
          variant="outline"
          className="border-primary text-primary before:bg-primary relative cursor-pointer overflow-hidden rounded-full border-2 bg-transparent px-6 py-2 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] before:absolute before:inset-0 before:z-0 before:m-auto before:h-[50px] before:w-[50px] before:scale-0 before:rounded-full before:transition-all before:duration-600 before:ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(193,163,98,0.4)] hover:before:scale-[3] active:scale-100"
        >
          <span className="relative z-[1]">{t('createScript')}</span>
        </Button>
      </div>
    </div>
  );
}
