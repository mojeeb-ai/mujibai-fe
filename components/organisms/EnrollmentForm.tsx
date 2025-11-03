"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

/**
 * @component EnrollmentForm
 * @description Displays the company enrollment form where users can fill out their details.
 * Uses i18n translations via `next-intl` for full multilingual support.
 */
export default function EnrollmentForm() {
  const t = useTranslations("enrollPage.enrollForm");

  return (
    <div
      className="
        rounded-2xl p-8 w-full
        bg-[#FFFFFFCC] dark:bg-[#06B6D40F]
        shadow-[0_0_25px_rgba(0,0,0,0.05)]
        backdrop-blur-md
        transition-all duration-200
      "
    >
      {/* Form Title */}
      <h2 className="text-2xl font-semibold mb-6 text-foreground">
        {t("title")}
      </h2>

      {/* Form Fields */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <FormField
          label={t("fullName")}
          placeholder={t("fullNamePlaceholder")}
          required
        />

        {/* Email */}
        <FormField
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          required
        />

        {/* Phone */}
        <FormField
          label={t("phone")}
          placeholder={t("phonePlaceholder")}
          required
        />

        {/* Company Name */}
        <FormField
          label={t("companyName")}
          placeholder={t("companyNamePlaceholder")}
          required
        />

        {/* Company Website */}
        <FormField
          label={t("companyWebsite")}
          placeholder={t("companyWebsitePlaceholder")}
          required
        />

        {/* Address */}
        <FormField
          label={t("address")}
          placeholder={t("addressPlaceholder")}
          required
        />

        {/* Industry */}
        <FormField
          label={t("industry")}
          placeholder={t("industryPlaceholder")}
          required
        />

        {/* Commercial Register */}
        <FormField
          label={t("commercialRegister")}
          placeholder={t("commercialRegisterPlaceholder")}
          required
        />

        {/* Tax ID */}
        <FormField
          label={t("taxId")}
          placeholder={t("taxIdPlaceholder")}
          required
        />

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <Label className="text-sm font-medium">
            {t("message")} <span className="text-cyan-500">*</span>
          </Label>
          <Textarea
            placeholder={t("messagePlaceholder")}
            className="bg-[#06B6D40F] border-none rounded-lg text-gray-900 placeholder:text-gray-500 h-24"
          />
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex justify-end mt-8">
        <Button className="bg-[#00B4D8] hover:bg-[#0096C7] text-white px-8 py-2 rounded-full shadow-md transition">
          {t("submit")}
        </Button>
      </div>
    </div>
  );
}

/**
 * @component FormField
 * @description Reusable input field component for form consistency.
 * @param {object} props
 * @param {string} props.label - The label text for the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {boolean} [props.required=false] - Whether the field is required.
 */
function FormField({
  label,
  placeholder,
  required = false,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-cyan-500">*</span>}
      </Label>
      <Input
        placeholder={placeholder}
        className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
      />
    </div>
  );
}
