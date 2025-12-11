import React from 'react';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function LogoutDailog({
  open,
  onClose,
  onConfirm,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}) {
  const t = useTranslations('landingPage.logoutDialog');
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('message')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose onClick={onClose}>
            <Button className="w-full" variant="outline">
              {t('cancel')}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant="destructive"
              disabled={loading}
              onClick={onConfirm}
            >
              {t('confirm')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
