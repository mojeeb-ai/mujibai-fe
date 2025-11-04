"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import Logo from "@/components/atoms/Logo";
import PasswordInput from "@/components/atoms/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const t = useTranslations("loginPage");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t("emailInvalid")).required(t("emailRequired")),
      password: Yup.string()
        .min(6, t("passwordMin"))
        .required(t("passwordRequired")),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Login submitted:", values);
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[65%] h-[65%] rounded-full 
          bg-[#06B6D4]/70 blur-[160px] 
          opacity-60 z-[-1]"
      ></div>

      <div className="sm:w-[50%] w-full h-[50%] flex items-center justify-center flex-col gap-5">
        <Logo />
        <div className="sm:w-full md:w-[80%] lg:w-[60%] border-t border-b border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 py-5"
          >
            {/* Email Field */}
            <div>
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder={t("emailPlaceholder")}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full mt-3 focus:outline-none focus:ring-2 border-none focus:ring-[#06B6D4]
                  bg-[#06B6D40F] dark:bg-[#3B82F633] 
                  placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">{t("password")}</Label>
              <PasswordInput
                id="password"
                name="password"
                placeholder={t("passwordPlaceholder")}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="w-full flex justify-end items-center">
              <Link
                href="/forget-password"
                className="text-primary capitalize font-semibold hover:underline"
              >
                {t("forgotPassword")}
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-full text-white capitalize py-5 text-md mt-2"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? t("loading") : t("loginButton")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
