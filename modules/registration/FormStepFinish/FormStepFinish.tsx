"use client";
import Button from "@/components/Button";
import FormGroupTitle from "@/components/Form/FormGroupTitle";
import { useI18n } from "@/locales/client";
import { Box, Text } from "@chakra-ui/react";
import { initialValues, useRegistrationForm } from "../RegistrationFormContext";

const FormStepFinish: React.FC<{
  onStartRegister: () => void;
}> = ({ onStartRegister }) => {
  const t = useI18n();
  const { setCurrentForm } = useRegistrationForm();

  const onHandleStartAgain = () => {
    setCurrentForm(initialValues);
    onStartRegister();
  };

  return (
    <Box>
      <FormGroupTitle title={t("successRegistration.finished")} />
      <Box mt="32px" mb="40px" bg="white" rounded="4px" p="24px">
        <Box textAlign="center" mb="20px">
          <Text
            fontFamily="heading"
            fontSize="20px"
            lineHeight="28px"
            mb="16px"
          >
            {t("successRegistration.title")}
          </Text>
          <Text fontSize="16px" lineHeight="20px" color="var(--color-text-100)">
            {t("successRegistration.message")}
          </Text>
        </Box>
        <Box textAlign="center">
          <Button width="217px" onClick={() => onHandleStartAgain()}>
            {t("successRegistration.actionBtn")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormStepFinish;
