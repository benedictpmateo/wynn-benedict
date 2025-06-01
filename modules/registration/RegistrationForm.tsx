"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import FormStepFinish from "./FormStepFinish";
import FormStepOTPVerification from "./FormStepOTPVerification";
import FormStepPersonalInfo from "./FormStepPersonalInfo";
import { RegistrationFormProvider } from "./RegistrationFormContext";

const MAX_STEP = 3;

enum StepsEnum {
  PersonalInfo = 1,
  SendAndVerifyOTP = 2,
  Done = 3,
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState<StepsEnum>(
    StepsEnum.PersonalInfo
  );

  const onClickBack = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      window?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onClickNext = () => {
    if (currentStep < MAX_STEP) {
      setCurrentStep((step) => step + 1);
      window?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onStartRegister = () => {
    setCurrentStep(StepsEnum.PersonalInfo);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <RegistrationFormProvider>
      <VStack direction="column" gap="40px" px={{ base: "16px", xl: 0 }}>
        <Box w="full">
          <Flex
            align="start"
            justify="space-between"
            mb="24px"
            color="var(--color-text-900)"
          >
            <Text fontFamily="heading" fontSize="37px" lineHeight="42px">
              Registration
            </Text>
            <Text fontFamily="heading" fontSize="24px" lineHeight="42px">
              Step {currentStep} of {MAX_STEP}
            </Text>
          </Flex>

          <Text fontSize="16px" color="var(--color-black)">
            Please enter below information to create your account.
          </Text>
        </Box>

        <Box w="full">
          {currentStep === StepsEnum.PersonalInfo && (
            <FormStepPersonalInfo onClickNext={onClickNext} />
          )}
          {currentStep === StepsEnum.SendAndVerifyOTP && (
            <FormStepOTPVerification
              onClickNext={onClickNext}
              onClickBack={onClickBack}
            />
          )}
          {currentStep === StepsEnum.Done && (
            <FormStepFinish onStartRegister={onStartRegister} />
          )}
        </Box>
      </VStack>
    </RegistrationFormProvider>
  );
};

export default RegistrationForm;
