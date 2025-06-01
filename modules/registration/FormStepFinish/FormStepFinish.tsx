"use client";
import FormGroupTitle from "@/components/Form/FormGroupTitle";
import { Box, Text } from "@chakra-ui/react";

const FormStepFinish: React.FC = () => {
  return (
    <Box>
      <FormGroupTitle title="Finished registration" />
      <Box mt="32px" mb="40px" bg="white" rounded="4px" p="24px">
        <Box textAlign="center" mb="20px">
          <Text
            fontFamily="heading"
            fontSize="20px"
            lineHeight="28px"
            mb="16px"
          >
            Successful registration.
          </Text>
          <Text fontSize="16px" lineHeight="20px" color="var(--color-text-100)">
            Thank you for registering in our platform.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FormStepFinish;
