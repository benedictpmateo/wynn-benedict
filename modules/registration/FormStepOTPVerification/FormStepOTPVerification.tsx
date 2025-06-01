"use client";
import FormGroupTitle from "@/components/Form/FormGroupTitle";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import SendCode from "./SendCode";
import VerifyOTP from "./VerifyOTP";
import {
  OTPStepsEnum,
  SendCodeTypeValue,
} from "./form-step-otp-verifcation.const";

type FormStepOTPVerificationProps = {
  onClickBack: () => void;
  onClickNext: () => void;
};

const FormStepOTPVerification: React.FC<FormStepOTPVerificationProps> = ({
  onClickBack,
  onClickNext,
}) => {
  const [sendCode, setSendCode] = useState<SendCodeTypeValue>(
    SendCodeTypeValue.Email
  );
  const [currentStep, setCurrentStep] = useState<OTPStepsEnum>(
    OTPStepsEnum.SendCode
  );

  const onSendOTP = (value: SendCodeTypeValue) => {
    setSendCode(value);
    setCurrentStep(OTPStepsEnum.VerifyOTP);
  };

  const onVerifyOTP = () => {
    onClickNext();
  };

  return (
    <Box>
      <FormGroupTitle title="OTP Verification" />
      {currentStep === OTPStepsEnum.SendCode && (
        <SendCode onClickNext={onSendOTP} onClickBack={() => onClickBack()} />
      )}
      {currentStep === OTPStepsEnum.VerifyOTP && (
        <VerifyOTP
          sendCodeTo={sendCode}
          onClickNext={onVerifyOTP}
          onClickBack={() => setCurrentStep(OTPStepsEnum.SendCode)}
        />
      )}
    </Box>
  );
};

export default FormStepOTPVerification;
