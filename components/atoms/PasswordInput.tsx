'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordInputProps {
  id: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: string
  touched?: boolean
  disabled?: boolean
  className?: string
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
  const [showPassword, setShowPassword] = useState(false)
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') e.preventDefault()
  }

  return (
    <div className="relative flex w-full flex-col">
      <Input
        id={id}
        name={name}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`mt-3 w-full ${className} ${
          isRTL ? 'pr-3 pl-12 text-right' : 'pr-12 pl-3 text-left'
        } focus:border-primary focus:ring-primary/30 border border-transparent bg-[#06B6D40F] transition-all duration-200 placeholder:text-[#000000BF] focus:ring-2 dark:bg-[#3B82F633] dark:placeholder:text-[#FFFFFFBF]`}
      />

      {/* Toggle visibility */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShowPassword((prev) => !prev)}
        className={`hover:text-primary absolute hover:bg-transparent dark:hover:bg-transparent ${
          isRTL ? 'left-2' : 'right-2'
        } text-primary top-[50%] h-9 w-9 -translate-y-[30%]`}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <Eye className="h-4 w-4" />
        ) : (
          <EyeOff className="h-4 w-4" />
        )}
      </Button>

      {/* Error Message */}
      {touched && error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}
