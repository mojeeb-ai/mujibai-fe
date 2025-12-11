'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import * as Yup from 'yup';

import useAuth from '@/hooks/useAuth';

import logoImage from '../../public/logo.svg';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

/**
 * ForgetPasswordPage
 *
 * A page that allows users to reset their password by entering their email.
 * Uses Formik for form handling and Yup for validation.
 * Automatically translates text based on the current locale using next-intl.
 */
export default function ForgetPasswordPage() {
  const t = useTranslations('forgetPasswordPage');
  const { alert, handleForgotPassword } = useAuth();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await handleForgotPassword(values.email);
        if (response) {
          resetForm();
          setSubmitting(false);
          Cookies.set('resetEmail', values.email, { expires: 1 / 24 });
          router.push('/password-reset-requested');
        }
      } catch (error) {
        console.error('Password reset error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

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

        {/* Card Container */}
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
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>

          {/* Form Section */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 py-5"
          >
            <div>
              <Label htmlFor="email">{t('emailLabel')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-3 w-full border-none bg-[#06B6D40F] placeholder:text-[#000000BF] focus:ring-2 focus:ring-[#06B6D4] focus:outline-none dark:bg-[#3B82F633] dark:placeholder:text-[#FFFFFFBF] ${
                  formik.touched.email && formik.errors.email
                    ? 'ring-2 ring-red-500'
                    : ''
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="text-md mt-4 w-full rounded-full py-5 text-white capitalize transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {formik.isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {t('sending')}
                </span>
              ) : (
                t('sendButton')
              )}
            </Button>

            {/* Return to Login Link */}
            <div className="flex items-center justify-center">
              <Link
                href="/login"
                className="text-primary transition-colors duration-200 hover:underline"
              >
                {t('returnLogin')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
