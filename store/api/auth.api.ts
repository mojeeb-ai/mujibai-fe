import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
    : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/v1/auth`,
    credentials: "include",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    checkAuth: builder.query({
      query: () => "/check-auth",
      providesTags: ["Auth"],
      keepUnusedDataFor: 300,
    }),

    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),

    forgotPassword: builder.mutation({
      query: (body: { email: string }) => ({
        url: "/forget-password",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    resetPassword: builder.mutation({
      query: (body: {
        userId: string;
        token: string;
        newPassword: string;
      }) => ({
        url: "/reset-password",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useCheckAuthQuery,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
