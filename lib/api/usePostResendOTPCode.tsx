import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostResendOTPCode = () => {
  const mutation = useMutation({
    mutationFn: async (body: { email: string }) => {
      const response = await axios.post(
        "https://5db7cfcce2c76f0014a54231.mockapi.io/api/otp",
        { ...body, resend: true }
      );
      return response;
    },
  });

  return mutation;
};

export default usePostResendOTPCode;
