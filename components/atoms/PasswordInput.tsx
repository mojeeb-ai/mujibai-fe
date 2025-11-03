"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

/**
 * PasswordInput component
 *
 * A password input field with a toggle to show/hide text.
 * Automatically adjusts icon position based on locale (RTL/LTR).
 * Prevents entering spaces in the password field.
 */
export default function PasswordInput({
  placeholder,
}: {
  placeholder: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const locale = useLocale();
  const isRTL = locale === "ar";

  /** Prevent spaces inside the password input */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") e.preventDefault();
  };

  return (
    <div className="relative w-full max-w-md">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        className={`
          w-full ${isRTL ? "pl-12 pr-3" : "pr-12 pl-3"} mt-3
          bg-[#06B6D40F] dark:bg-[#3B82F633]
          border border-transparent focus:border-primary
          text-gray-800 dark:text-gray-100
          placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]
          shadow-none focus:ring-2 focus:ring-primary/30
          transition-all duration-200
          text-${isRTL ? "right" : "left"}
        `}
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShowPassword((prev) => !prev)}
        className={`
          absolute ${isRTL ? "left-2" : "right-2"} top-1/2 -translate-y-1/2
          w-9 h-9 text-primary hover:bg-primary/20
          transition-all duration-200
        `}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <Eye className="w-4 h-4" />
        ) : (
          <EyeOff className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}
