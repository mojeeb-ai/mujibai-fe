import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import { ThemeSwitcher } from "../atoms/ThemeSwitcher";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import LogoutDailog from "../molecules/landing/dialogs/LogoutDailog";
import { User } from "@/types/types";
import { useTranslations } from "next-intl";
/**
 * Action buttons component with authentication state handling
 *  Action buttons with user state management
 */
export default function ActionsButtons({ user }: { user: User | null }) {
  const { handleLogout, logoutLoading } = useAuth();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const t = useTranslations("landingPage");

  return (
    <div className="sm:flex hidden justify-center items-center gap-2">
      <ThemeSwitcher />
      <LanguageSwitcher />

      {/* No user - Show Get Started and Enroll buttons */}
      {!user && (
        <div className="flex gap-2.5">
          <Button
            className="rounded-full font-medium dark:text-white"
            variant="default"
          >
            <Link href="/login" className="px-9 py-3">
              {t("header.getStarted")}
            </Link>
          </Button>
          <Button
            className="rounded-full font-bold hover:bg-transparent hover:text-primary border-2 border-primary text-primary dark:border-primary"
            variant="outline"
          >
            <Link href="/enroll" className="px-9 py-3">
              {t("header.enroll")}
            </Link>
          </Button>
        </div>
      )}

      {/* Client user - Show Dashboard and Logout */}
      {user?.role === "client" && (
        <div className="flex gap-2.5">
          <Button
            className="rounded-full font-medium dark:text-white"
            variant="default"
          >
            <Link href="/dashboard" className="px-9 py-3">
              {t("header.dashboard")}
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setOpenLogoutDialog(true)}
          >
            {t("header.logout")}
          </Button>
        </div>
      )}

      {/* Admin user - Show Admin Dashboard and Logout */}
      {user?.role === "admin" && (
        <div className="flex gap-2.5">
          <Button
            className="rounded-full font-medium dark:text-white"
            variant="default"
          >
            <Link href="/admin-dashboard" className="px-9 py-3">
              {t("header.dashboard")}
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setOpenLogoutDialog(true)}
          >
            {t("header.logout")}
          </Button>
        </div>
      )}

      {/* Logout Confirmation Dialog */}
      <LogoutDailog
        open={openLogoutDialog}
        onClose={() => setOpenLogoutDialog(false)}
        onConfirm={handleLogout}
        loading={logoutLoading}
      />
    </div>
  );
}
