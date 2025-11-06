import React from "react";
import ResetPasswordPage from "@/components/pages/ResetPasswordPage";

interface Props {
  searchParams: { userId: string; token: string };
}
export default function ResetPassword({ searchParams }: Props) {
  const userId = searchParams.userId || "";
  const token = searchParams.token || "";

  return <ResetPasswordPage userId={userId} token={token} />;
}
