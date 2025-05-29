"use client";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import RegistrationPersonalInfo from "./RegistrationPersonalInfo";
import RegistrationSendAndVerifyOTP from "./RegistrationSendAndVerifyOTP";

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

  return (
    <VStack direction="column" gap="40px">
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
          <RegistrationPersonalInfo onClickNext={onClickNext} />
        )}
        {currentStep === StepsEnum.SendAndVerifyOTP && (
          <RegistrationSendAndVerifyOTP
            onClickNext={onClickNext}
            onClickBack={onClickBack}
          />
        )}
      </Box>
    </VStack>
  );
};

export default RegistrationForm;
