import React from "react";
import Logo from "../atoms/Logo";
import { CheckCircle } from "lucide-react";
import EnrollmentForm from "../organisms/EnrollmentForm";
import { useTranslations } from "next-intl";

/**
 * EnrollPage — Company enrollment form with instructions section.
 */
export default function EnrollPage() {
  const t = useTranslations("enrollPage");
  const instructions = [
    t("instructions.inst1"),
    t("instructions.inst2"),
    t("instructions.inst3"),
    t("instructions.inst4"),
    t("instructions.inst5"),
    t("instructions.inst6"),
    t("instructions.inst7"),
    t("instructions.inst8"),
    t("instructions.inst9"),
    t("instructions.inst10"),
  ];
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative flex flex-col items-center py-12">
      {/* Background Glow */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[60%] h-[60%] rounded-full 
          bg-[#06B6D4]/40 blur-[160px] 
          opacity-60 z-[-1]"
      ></div>

      {/* Logo */}
      <div className="mb-10">
        <Logo />
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 px-6 lg:px-10">
        {/* Instructions Section */}
        <div className="flex-1 max-w-xl">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              {t("title")}
            </h2>
            <p className="text-sm mb-6 text-foreground">{t("description")}</p>

            <ul className="space-y-3">
              {instructions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enrollment Form */}
        <div className="flex-1 w-full">
          <EnrollmentForm />
        </div>
      </div>
    </div>
  );
}
