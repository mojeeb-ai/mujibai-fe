import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
    : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION;
export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/v1/clients`,
    credentials: "include",
  }),
  tagTypes: ["Client"],
  endpoints: (builder) => ({
    getClient: builder.query({
      query: (id: string) => `/${id}`,
      providesTags: ["Client"],
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetClientQuery } = clientApi;
