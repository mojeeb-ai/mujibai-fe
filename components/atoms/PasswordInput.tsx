"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * PasswordInput — controlled password input field with show/hide toggle
 * Designed for use with form libraries like Formik (SOLID: SRP & OCP)
 */
export default function PasswordInput({
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  disabled,
  className,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const locale = useLocale();
  const isRTL = locale === "ar";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") e.preventDefault();
  };

  return (
    <div className="relative w-full flex flex-col">
      <Input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`w-full mt-3 ${className} ${
          isRTL ? "pl-12 pr-3 text-right" : "pr-12 pl-3 text-left"
        }
          bg-[#06B6D40F] dark:bg-[#3B82F633]
          border border-transparent focus:border-primary
          placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]
          focus:ring-2 focus:ring-primary/30 transition-all duration-200
        `}
      />

      {/* Toggle visibility */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShowPassword((prev) => !prev)}
        className={`absolute hover:bg-transparent dark:hover:bg-transparent hover:text-primary ${
          isRTL ? "left-2" : "right-2"
        } top-[50%] -translate-y-[30%] w-9 h-9 text-primary`}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <Eye className="w-4 h-4" />
        ) : (
          <EyeOff className="w-4 h-4" />
        )}
      </Button>

      {/* Error Message */}
      {touched && error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
