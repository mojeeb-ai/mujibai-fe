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

export interface Client {
  _id: string;
  clientId: string;
  chatbotId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  description: string;
  industry: string;
  size: string;
  commercialRegister: string;
  taxId: string;
  planId: string;
  subscriptionActive: boolean;
  performanceReports: boolean;
  planUsageAlert: boolean;
  ticketEscalationAlert: boolean;
  emailNotification: boolean;

  integrationSlack: boolean;
  integrationWhatsapp: boolean;
  integrationGoogleCalendar: boolean;

  slackAccessToken: string | null;
  slackChannel: string | null;
  slackTeamId: string | null;
  slackUserId: string | null;

  googleCalendarAccessToken: string | null;
  googleCalendarRefreshToken: string | null;
  googleCalendarExpiryDate: string | null;
  googleCalendarCalendarId: string | null;
  googleCalendarTimeZone: string | null;

  whatsappOtp: string | null;

  subscriptionExpireAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface EnrollmentFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  address: string;
  industry: string;
  commercialRegister: string;
  taxId: string;
  message: string;
}
