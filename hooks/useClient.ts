import { useGetClientQuery } from "@/store/api/client.api";
import useAuth from "./useAuth";

export default function useClient() {
  const { user } = useAuth();
  const { data } = useGetClientQuery(user?._id);
  return {
    client: data?.data,
  };
}
