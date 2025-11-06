import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import { ThemeSwitcher } from "../atoms/ThemeSwitcher";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import LogoutDailog from "../molecules/landing/dialogs/LogoutDailog";

/**
 * Action buttons component with authentication state handling
 * @returns {JSX.Element} Action buttons with user state management
 */
export default function ActionsButtons() {
  const { user, userLoading, handleLogout, logoutLoading } = useAuth();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  if (userLoading) {
    return (
      <div className="sm:flex hidden justify-center items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <div className="flex gap-2.5">
          <Skeleton className="h-10 w-32 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>
    );
  }

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
              Get Started
            </Link>
          </Button>
          <Button
            className="rounded-full font-bold hover:bg-transparent hover:text-primary border-2 border-primary text-primary dark:border-primary"
            variant="outline"
          >
            <Link href="/enroll" className="px-9 py-3">
              Enroll
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
              Dashboard
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setOpenLogoutDialog(true)}
          >
            Logout
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
              Dashboard
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setOpenLogoutDialog(true)}
          >
            Logout
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
