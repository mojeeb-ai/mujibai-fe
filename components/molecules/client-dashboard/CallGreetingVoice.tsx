import { Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CallGreetingVoice({
  t,
  locale,
}: {
  t: (key: string) => string;
  locale: string;
}) {
  return (
    <article>
      <h2 className="text-xl font-semibold">{t('callGreeting')}</h2>
      <div className="flex flex-wrap items-center justify-center gap-3 py-4 sm:flex-nowrap">
        <Select>
          <SelectTrigger className="w-full border-0 bg-[#06B6D426]">
            <SelectValue placeholder={t('selectLanguageGreeting')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greeting-1">Greeting 1</SelectItem>
            <SelectItem value="greeting-2">Greeting 2</SelectItem>
            <SelectItem value="greeting-3">Greeting 3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full border-0 bg-[#06B6D426]">
            <SelectValue placeholder={t('selectVoice')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greeting-1">Greeting 1</SelectItem>
            <SelectItem value="greeting-2">Greeting 2</SelectItem>
            <SelectItem value="greeting-3">Greeting 3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full border-0 bg-[#06B6D426]">
            <SelectValue placeholder="Select a greeting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greeting-1">Greeting 1</SelectItem>
            <SelectItem value="greeting-2">Greeting 2</SelectItem>
            <SelectItem value="greeting-3">Greeting 3</SelectItem>
          </SelectContent>
        </Select>
        <Button className="h-10 w-10 rounded-full">
          <Play
            className={`size-5 ${locale === 'ar' && 'rotate-180'}`}
            fill="#fff"
          />
        </Button>
      </div>
    </article>
  );
}
