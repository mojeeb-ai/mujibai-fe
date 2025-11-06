"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../atoms/Logo";
import PasswordInput from "../atoms/PasswordInput";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useTranslations } from "next-intl";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) {
  const t = useTranslations("resetPasswordPage");

  const router = useRouter();

  const { handleResetPassword } = useAuth();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, t("passwordTooShort"))
        .required(t("passwordRequired")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], t("passwordsMustMatch"))
        .required(t("confirmPasswordRequired")),
    }),
    onSubmit: async (values, { resetForm }) => {
      const res = await handleResetPassword({
        userId,
        token,
        newPassword: values.newPassword,
      });

      if (res) {
        resetForm();
        router.push("/");
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

        {/* Password Reset Card */}
        <div className="sm:w-[100%] md:w-[80%] lg:w-[60%] border-t border-b border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 py-5"
          >
            {/* New Password */}
            <div>
              <Label>{t("newPassword")}</Label>
              <PasswordInput
                id="newPassword"
                name="newPassword"
                placeholder={t("placeholder")}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <Label>{t("confirmPassword")}</Label>
              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t("placeholder")}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="w-full rounded-full text-white capitalize py-5 text-md mt-2
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? t("submitting") : t("submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
