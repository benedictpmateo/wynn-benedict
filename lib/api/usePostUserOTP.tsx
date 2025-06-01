import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostUserOTP = () => {
  const mutation = useMutation({
    mutationFn: async (body: { email: string; otpCode: string }) => {
      const response = await axios.post(
        "https://5db7cfcce2c76f0014a54231.mockapi.io/api/otp",
        body
      );
      return response;
    },
  });

  return mutation;
};

export default usePostUserOTP;
