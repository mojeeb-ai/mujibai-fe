// hooks/useClient.ts
import { useQuery } from '@tanstack/react-query';

import { api } from '@/utils/axios';

import useAuth from './useAuth';

/** Client API response */
interface ClientResponse {
  data: unknown;
  message?: string;
}

/** Fetch client by user ID */
const getClient = async (userId: string): Promise<ClientResponse> => {
  const { data } = await api.get<ClientResponse>(`/client/${userId}`);
  return data;
};

/** Client hook */
export default function useClient() {
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ['client', user?._id],
    queryFn: () => getClient(user?._id as string),
    enabled: !!user?._id,
  });

  return {
    client: data?.data,
  };
}
