import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play } from "lucide-react";

export default function CallGreetingVoice() {
  return (
    <article>
      <h2 className="text-xl font-semibold">Call Greeting </h2>
      <div className="flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap py-4">
        <Select>
          <SelectTrigger className="w-full bg-[#06B6D426] border-0">
            <SelectValue placeholder="Select a greeting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greeting-1">Greeting 1</SelectItem>
            <SelectItem value="greeting-2">Greeting 2</SelectItem>
            <SelectItem value="greeting-3">Greeting 3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-[#06B6D426] border-0">
            <SelectValue placeholder="Select a greeting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greeting-1">Greeting 1</SelectItem>
            <SelectItem value="greeting-2">Greeting 2</SelectItem>
            <SelectItem value="greeting-3">Greeting 3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-[#06B6D426] border-0">
            <SelectValue placeholder="Select a greeting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greeting-1">Greeting 1</SelectItem>
            <SelectItem value="greeting-2">Greeting 2</SelectItem>
            <SelectItem value="greeting-3">Greeting 3</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-10 h-10 rounded-full">
          <Play className="size-5" fill="#fff" />
        </Button>
      </div>
    </article>
  );
}
