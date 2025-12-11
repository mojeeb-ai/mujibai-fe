'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import Cookies from 'js-cookie';
import { Loader2 } from 'lucide-react';

import useAuth from '@/hooks/useAuth';

import logoImage from '../../public/logo.svg';
import { Button } from '../ui/button';

export default function PasswordResetRequested() {
  const { handleForgotPassword, loading } = useAuth();

  const resetEmail = Cookies.get('resetEmail');
  const t = useTranslations('passwordResetRequested');
  const handleSendAgain = async () => {
    const res = await handleForgotPassword(resetEmail || '');
    if (res) {
      Cookies.remove('resetEmail');
    }
  };
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute top-1/2 left-1/2 z-[-1] h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/70 opacity-60 blur-[160px]"></div>

      <div className="flex h-[50%] w-[90%] flex-col items-center justify-center gap-5 sm:w-[50%]">
        <Link
          href={'/'}
          className="transition-all duration-300 hover:scale-110"
        >
          <Image src={logoImage} alt="Logo" width={200} height={50} />
        </Link>
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-t-1 border-b-1 border-white bg-[#FFFFFF80] p-10 text-center sm:w-[100%] md:w-[80%] lg:w-[60%] dark:bg-[#06B6D40F]">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/dashboard-images/password-reset-requested.svg"
              alt={t('title')}
              width={300}
              height={300}
              className="h-40 w-40"
            />
            <h1 className="text-2xl font-semibold">{t('title')}</h1>
            <p className="m-auto w-[100%] text-sm sm:w-[80%]">
              {t('description')}
            </p>
          </div>
          <Button
            className="text-foreground w-full rounded-full py-5 capitalize"
            onClick={handleSendAgain}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="size-5 animate-spin" />
                {t('sending')}
              </span>
            ) : (
              t('button')
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
