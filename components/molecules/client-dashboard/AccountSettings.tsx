'use client';
import { useTranslations } from 'next-intl';

import PasswordInput from '@/components/atoms/PasswordInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AccountSettings() {
  const t = useTranslations('settings.accountSettings');
  return (
    <div className="w-full">
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{t('title')}</CardTitle>
        </CardHeader>

        <CardContent className="rounded-2xl bg-[#FFFFFFBF] p-6 dark:bg-[#00143473]">
          <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-lg font-semibold">{t('profileInformation')}</h1>
            <p className="text-sm text-gray-400">{t('subTitle')}</p>
          </div>

          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                {t('firstName')}
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder={t('firstNamePlaceholder')}
                className="focus-visible:ring-primary border-none bg-[#06B6D40F] text-white placeholder:text-gray-400 focus-visible:ring-1 dark:bg-[#FFFFFF0F]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                {t('lastName')}
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder={t('lastNamePlaceholder')}
                className="focus-visible:ring-primary border-none bg-[#06B6D40F] text-white placeholder:text-gray-400 focus-visible:ring-1 dark:bg-[#FFFFFF0F]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                {t('email')}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                className="focus-visible:ring-primary border-none bg-[#06B6D40F] text-white placeholder:text-gray-400 focus-visible:ring-1 dark:bg-[#FFFFFF0F]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                {t('phone')}
              </Label>
              <Input
                id="phone"
                type="text"
                placeholder={t('phonePlaceholder')}
                className="focus-visible:ring-primary border-none bg-[#06B6D40F] text-white placeholder:text-gray-400 focus-visible:ring-1 dark:bg-[#FFFFFF0F]"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="location" className="text-sm font-medium">
                {t('location')}
              </Label>
              <Input
                id="location"
                type="text"
                placeholder={t('locationPlaceholder')}
                className="focus-visible:ring-primary border-none bg-[#06B6D40F] text-white placeholder:text-gray-400 focus-visible:ring-1 dark:bg-[#FFFFFF0F]"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="bio" className="text-sm font-medium">
                {t('bio')}
              </Label>
              <Input
                id="bio"
                type="text"
                placeholder={t('bioPlaceholder')}
                className="focus-visible:ring-primary border-none bg-[#06B6D40F] text-white placeholder:text-gray-400 focus-visible:ring-1 dark:bg-[#FFFFFF0F]"
              />
            </div>

            {/* ===== Password Section ===== */}
            <div className="col-span-full mt-8 flex flex-col gap-2">
              <h1 className="text-lg font-semibold">
                {t('passwordManagement')}
              </h1>
              <p className="text-sm text-gray-400">
                {t('passwordManagementDescription')}
              </p>
            </div>

            {/* Current Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="currentPassword" className="text-sm font-medium">
                {t('currentPassword')}
              </Label>
              <PasswordInput placeholder="********" />
            </div>

            {/* New Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="newPassword" className="text-sm font-medium">
                {t('newPassword')}
              </Label>
              <PasswordInput placeholder="********" />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                {t('confirmPassword')}
              </Label>
              <PasswordInput placeholder="********" />
            </div>

            {/* Save Button */}
            <div className="col-span-full mt-6 flex justify-end">
              <Button
                className="rounded-full px-8 py-2 font-semibold"
                type="button"
              >
                {t('saveChanges')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
