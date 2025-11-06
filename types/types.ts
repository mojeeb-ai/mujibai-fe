export interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: { name: string; included: boolean }[];
  isPopular: boolean;
}

export interface User {
  _id: number;
  fullName: string;
  email: string;
  role: string;
}

import * as yup from "yup";

export const schema = yup.object({
  id: yup.number().required(),
  header: yup.string().required(),
  type: yup.string().required(),
  status: yup.string().required(),
  target: yup.string().required(),
  limit: yup.string().required(),
  reviewer: yup.string().required(),
});

export type Item = yup.InferType<typeof schema>;
