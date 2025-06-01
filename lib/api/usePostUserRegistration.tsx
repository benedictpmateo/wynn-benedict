import { SendCodeTypeValue } from "@/modules/registration/FormStepOTPVerification/form-step-otp-verifcation.const";
import { RegistrationFormData } from "@/modules/registration/RegistrationFormContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostUserRegistration = () => {
  const mutation = useMutation({
    mutationFn: async (
      body: RegistrationFormData & {
        sendTo: SendCodeTypeValue;
      }
    ) => {
      const response = await axios.post(
        "https://5db7cfcce2c76f0014a54231.mockapi.io/api/user",
        body
      );
      return response;
    },
  });

  return mutation;
};

export default usePostUserRegistration;
