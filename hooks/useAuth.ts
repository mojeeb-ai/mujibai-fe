import { useLoginMutation } from "@/store/api/auth.api";
import { toast } from "sonner";

export default function useAuth() {
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const handleLogin = async (data: { email: string; password: string }) => {
    const res = await login(data);
    console.log(res);
    if (res.data) {
      console.log(res.data);
      toast.success("Login successful");
    }
    return res?.data;
  };
  return {
    loginLoading,
    handleLogin,
  };
}
