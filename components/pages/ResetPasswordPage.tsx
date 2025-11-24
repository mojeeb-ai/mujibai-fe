'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import PasswordInput from '../atoms/PasswordInput'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { useTranslations } from 'next-intl'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../public/logo.svg'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react'

export default function ResetPasswordPage({
  userId,
  token,
}: {
  userId: string
  token: string
}) {
  const t = useTranslations('resetPasswordPage')

  const router = useRouter()

  const { handleResetPassword, alert } = useAuth()

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, t('passwordTooShort'))
        .required(t('passwordRequired')),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], t('passwordsMustMatch'))
        .required(t('confirmPasswordRequired')),
    }),
    onSubmit: async (values, { resetForm }) => {
      const res = await handleResetPassword({
        userId,
        token,
        newPassword: values.newPassword,
      })

      if (res) {
        resetForm()
        router.push('/')
      }
    },
  })

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* Background Blur Effect */}
      <div className="absolute top-1/2 left-1/2 z-[-1] h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/70 opacity-60 blur-[160px]" />

      <div className="flex h-[50%] w-[100%] flex-col items-center justify-center gap-5 sm:w-[50%]">
        <Link
          href={'/'}
          className="transition-all duration-300 hover:scale-110"
        >
          <Image src={logoImage} alt="Logo" width={200} height={50} />
        </Link>

        {/* Password Reset Card */}
        <div className="rounded-2xl border-t border-b border-white bg-[#FFFFFF80] p-10 sm:w-[100%] md:w-[80%] lg:w-[60%] dark:bg-[#06B6D40F]">
          {alert.type && (
            <Alert
              variant={alert.type === 'error' ? 'destructive' : 'default'}
              className={`${alert.type === 'error' ? 'border-red-200 bg-red-50/20' : 'border-green-200 bg-green-50/20'}`}
            >
              {alert.type === 'success' ? (
                <CheckCircle2Icon />
              ) : (
                <AlertCircleIcon />
              )}
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          )}
          <h1 className="text-2xl font-semibold">{t('title')}</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 py-5"
          >
            {/* New Password */}
            <div>
              <Label>{t('newPassword')}</Label>
              <PasswordInput
                id="newPassword"
                name="newPassword"
                placeholder={t('placeholder')}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <Label>{t('confirmPassword')}</Label>
              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t('placeholder')}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="text-md mt-2 w-full rounded-full py-5 text-white capitalize disabled:cursor-not-allowed disabled:opacity-50"
            >
              {formik.isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
