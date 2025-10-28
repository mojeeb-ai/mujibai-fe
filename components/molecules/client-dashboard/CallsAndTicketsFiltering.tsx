"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

/**
 * CallsAndTicketsFiltering
 * Filter bar with two dropdowns and a filter button.
 */
export default function CallsAndTicketsFiltering() {
  return (
    <div className="flex justify-end items-center gap-3 w-full px-2 py-2">
      {/* Filter 1 */}
      <Select>
        <SelectTrigger className="w-[260px] h-[44px] rounded-lg dark:bg-[#001434A6] bg-[#F7F7F7F2] border-0 shadow-none transition-colors">
          <SelectValue placeholder="Filter 1" />
        </SelectTrigger>
        <SelectContent className="bg-[#001434] text-gray-200 border-[#0b254a]">
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>

      {/* Filter 2 */}
      <Select>
        <SelectTrigger className="w-[260px] h-[44px] rounded-lg dark:bg-[#001434A6] bg-[#F7F7F7F2] border-0 shadow-none transition-colors">
          <SelectValue placeholder="Filter 2" />
        </SelectTrigger>
        <SelectContent className="bg-[#001434] text-gray-200 border-[#0b254a]">
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>

      <Button>
        <Filter className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
}
