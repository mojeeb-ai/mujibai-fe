"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

/**
 * ForgetPasswordPage
 *
 * A page that allows users to reset their password by entering their email.
 * Uses Formik for form handling and Yup for validation.
 * Automatically translates text based on the current locale using next-intl.
 */
export default function ForgetPasswordPage() {
  const t = useTranslations("forgetPasswordPage");
  const { handleForgotPassword } = useAuth();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t("emailInvalid")).required(t("emailRequired")),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await handleForgotPassword(values.email);
        if (response) {
          resetForm();
          setSubmitting(false);
          // TODO: Save the email in cookies to reuse it when sending again.
          Cookies.set("resetEmail", values.email, { expires: 1 / 24 });
          router.push("/password-reset-requested");
        }
      } catch (error) {
        console.error("Password reset error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      {/* Background Blur Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/70 blur-[160px] 
            opacity-60 z-[-1]"
      />

      <div className="sm:w-[50%] w-[100%] h-[50%] flex items-center justify-center flex-col gap-5">
        <Logo />

        {/* Card Container */}
        <div className="sm:w-[100%] md:w-[80%] lg:w-[60%] border-t border-b border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>

          {/* Form Section */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 py-5"
          >
            <div>
              <Label htmlFor="email">{t("emailLabel")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("emailPlaceholder")}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full mt-3 focus:outline-none focus:ring-2 border-none focus:ring-[#06B6D4]
                          bg-[#06B6D40F] dark:bg-[#3B82F633]
                          placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]
                          ${
                            formik.touched.email && formik.errors.email
                              ? "ring-2 ring-red-500"
                              : ""
                          }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="w-full rounded-full text-white capitalize py-5 text-md mt-4
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-opacity duration-200"
            >
              {formik.isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t("sending")}
                </span>
              ) : (
                t("sendButton")
              )}
            </Button>

            {/* Return to Login Link */}
            <div className="flex justify-center items-center">
              <Link
                href="/login"
                className="text-primary hover:underline transition-colors duration-200"
              >
                {t("returnLogin")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
