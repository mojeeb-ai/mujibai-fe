import LandingPage from '@/components/pages/LandingPage'
import axios from 'axios'
import { cookies } from 'next/headers'

async function getUserFromServer() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
        : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION

    const cookieHeader = (await cookies()).toString()

    if (!cookieHeader.includes('token')) {
      return
    }

    const res = await axios.get(`${baseUrl}/api/v1/auth/check-auth`, {
      headers: {
        Cookie: cookieHeader,
      },
    })

    return res.data?.data
  } catch (error) {
    console.log('error', error)
    return null
  }
}

export default async function HomePage() {
  const user = await getUserFromServer()

  return <LandingPage user={user} />
}
