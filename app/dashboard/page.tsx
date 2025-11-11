import ClientDashboardOverviewPage from "@/components/pages/client-dashboard/ClientDashboardOverviewPage";
import axios from "axios";
import { cookies } from "next/headers";

async function getUserFromServer() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
        : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION;

    const cookieHeader = (await cookies()).toString();

    const res = await axios.get(`${baseUrl}/api/v1/auth/check-auth`, {
      headers: {
        Cookie: cookieHeader,
      },
    });

    // get client

    const client = await axios.get(
      `${baseUrl}/api/v1/clients/${res.data?.data._id}`,
      {
        headers: {
          Cookie: cookieHeader,
        },
      }
    );

    return client.data?.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
export default async function ClientDashboardPage() {
  const client = await getUserFromServer();
  return <ClientDashboardOverviewPage client={client} />;
}
