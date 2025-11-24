// lib/axios.ts
import axios from 'axios'

const baseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
    : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION

export const api = axios.create({
  baseURL: `${baseUrl}/api/v1`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

/** Request interceptor for adding auth tokens or logging */
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
