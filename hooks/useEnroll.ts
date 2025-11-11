import { useCreateEnrollMutation } from "@/store/api/enroll.api";
import { EnrollmentFormValues } from "@/types/types";

export default function useEnroll() {
  const [createEnroll, { isLoading: isEnrollLoading }] =
    useCreateEnrollMutation();

  const handleEnroll = async (values: EnrollmentFormValues) => {
    try {
      const response = await createEnroll(values);
      console.log(response);
      if (response) {
        console.log("Enrollment successful");
      }
      return response?.data;
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  return {
    handleEnroll,
    isEnrollLoading,
  };
}
