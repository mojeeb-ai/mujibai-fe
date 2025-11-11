"use client";
import {
  useCheckAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/store/api/auth.api";
import { toast } from "sonner";

export default function useAuth() {
  const [login, { isLoading: loginLoading }] = useLoginMutation();

  const { data: authData, isLoading: userLoading } = useCheckAuthQuery(
    undefined,
    {
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
    }
  );

  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();

  const [forgotPassword, { isLoading: forgotPasswordLoading }] =
    useForgotPasswordMutation();

  const [resetPassword, { isLoading: resetPasswordLoading }] =
    useResetPasswordMutation();

  const handleForgotPassword = async (email: string) => {
    const response = await forgotPassword({ email });

    if (response.data) {
      toast.success("Password reset email sent successfully");
      return response.data;
    }

    if (response.error) {
      const errorData = response.error as {
        data?: {
          message?: string;
        };
        status?: number;
      };

      const errorMessage =
        errorData?.data?.message || "Failed to send password reset email";
      toast.error(errorMessage);
      return null;
    }

    return null;
  };

  const handleResetPassword = async (credentials: {
    userId: string;
    token: string;
    newPassword: string;
  }) => {
    const response = await resetPassword(credentials);

    if (response.data) {
      toast.success("Password reset successful");
      return response.data;
    }

    if (response.error) {
      const errorData = response.error as {
        data?: {
          message?: string;
        };
        status?: number;
      };

      const errorMessage =
        errorData?.data?.message || "Password reset failed - please try again";
      toast.error(errorMessage);
      return null;
    }

    return null;
  };

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    const response = await login(credentials);

    if (response.data) {
      toast.success("Login successful");
      return response.data;
    }

    if (response.error) {
      const errorData = response.error as {
        data?: {
          message?: string;
        };
        status?: number;
      };

      const errorMessage =
        errorData?.data?.message || "Login failed - please try again";
      toast.error(errorMessage);
      return null;
    }

    return null;
  };

  const handleLogout = async () => {
    const response = await logout(undefined);

    if (response.data) {
      toast.success("Logout successful");
      window.location.reload();
      return response.data;
    }

    if (response.error) {
      const errorData = response.error as {
        data?: {
          message?: string;
        };
        status?: number;
      };

      const errorMessage =
        errorData?.data?.message || "Logout failed - please try again";
      toast.error(errorMessage);
      return null;
    }

    return null;
  };

  return {
    loginLoading,
    handleLogin,
    user: authData?.data,
    userLoading,
    logoutLoading,
    handleLogout,
    handleForgotPassword,
    handleResetPassword,
    loading:
      loginLoading ||
      logoutLoading ||
      forgotPasswordLoading ||
      resetPasswordLoading,
  };
}
