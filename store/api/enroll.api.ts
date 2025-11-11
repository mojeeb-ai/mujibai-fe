import { EnrollmentFormValues } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
    : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION;

export const enrollApi = createApi({
  reducerPath: "enrollApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/v1/enrollment-form`,
    credentials: "include",
  }),
  tagTypes: ["Enroll"],
  endpoints: (builder) => ({
    createEnroll: builder.mutation({
      query: (body: EnrollmentFormValues) => ({
        url: `/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Enroll"],
    }),
  }),
});

export const { useCreateEnrollMutation } = enrollApi;
