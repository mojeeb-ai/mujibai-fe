'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';
import { AlertCircleIcon, CheckCircle2Icon, Loader2 } from 'lucide-react';
import * as Yup from 'yup';

import PasswordInput from '@/components/atoms/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import useAuth from '@/hooks/useAuth';

import logoImage from '../../public/logo.svg';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

/**
 * Login page component with authentication form
 * Login page UI
 */
export default function LoginPage() {
  const t = useTranslations('loginPage');
  const { alert, handleLogin, loginLoading } = useAuth();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
      password: Yup.string()
        .min(6, t('passwordMin'))
        .required(t('passwordRequired')),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await handleLogin(values);
      if (response) {
        resetForm();
        router.push('/');
      }
    },
  });

  const isLoading = formik.isSubmitting || loginLoading;

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute top-1/2 left-1/2 z-[-1] h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/70 opacity-60 blur-[160px]" />

      <div className="flex h-[50%] w-full flex-col items-center justify-center gap-5 sm:w-[50%]">
        <Link
          href={'/'}
          className="transition-all duration-300 hover:scale-110"
        >
          <Image src={logoImage} alt="Logo" width={200} height={50} />
        </Link>

        <div className="rounded-2xl border-t border-b border-white bg-[#FFFFFF80] p-10 sm:w-full md:w-[80%] lg:w-[60%] dark:bg-[#06B6D40F]">
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
            {/* Email Field */}
            <div>
              <Label htmlFor="email">{t('email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isLoading}
                className="mt-3 w-full border-none bg-[#06B6D40F] placeholder:text-[#000000BF] focus:ring-2 focus:ring-[#06B6D4] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#3B82F633] dark:placeholder:text-[#FFFFFFBF]"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">{t('password')}</Label>
              <PasswordInput
                id="password"
                name="password"
                placeholder={t('passwordPlaceholder')}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isLoading}
                className="disabled:cursor-not-allowed disabled:opacity-50"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex w-full items-center justify-end">
              <Link
                href="/forget-password"
                className={`text-primary font-semibold capitalize hover:underline ${
                  isLoading ? 'pointer-events-none opacity-50' : ''
                }`}
              >
                {t('forgotPassword')}
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="text-md mt-2 w-full rounded-full py-5 text-white capitalize transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="size-4 animate-spin" />
                  {t('loading')}
                </span>
              ) : (
                t('loginButton')
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
