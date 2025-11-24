// hooks/useEnroll.ts
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { EnrollmentFormValues } from '@/types/types'
import { api } from '@/utils/axios'

/** Enrollment API response */
interface EnrollResponse {
  data: unknown
  message?: string
}

/** API error response */
interface ApiErrorResponse {
  message?: string
}

/** Create enrollment */
const createEnrollment = async (
  values: EnrollmentFormValues,
): Promise<EnrollResponse> => {
  const { data } = await api.post<EnrollResponse>('/enroll', values)

  return data
}

/** Extract error message from axios error */
const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (error instanceof AxiosError) {
    const axiosError = error as AxiosError<ApiErrorResponse>
    return axiosError.response?.data?.message || defaultMessage
  }
  return defaultMessage
}

/** Enrollment hook */
export default function useEnroll() {
  const enrollMutation = useMutation({
    mutationFn: createEnrollment,
    onSuccess: () => {
      toast.success('Enrollment successful')
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(
        error,
        'Enrollment failed - please try again',
      )
      toast.error(errorMessage)
    },
  })

  const handleEnroll = async (values: EnrollmentFormValues) => {
    try {
      const data = await enrollMutation.mutateAsync(values)
      return data
    } catch (error) {
      console.error('Enrollment failed:', error)
      return null
    }
  }

  return {
    handleEnroll,
    isEnrollLoading: enrollMutation.isPending,
  }
}
