"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import InputCheckbox from "@/components/InputCheckbox";
import { PAGE_ROUTES } from "@/lib/configs/routes";
import { useI18n } from "@/locales/client";
import { Box, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registrationFormBlocks } from "../registration.const";
import { registrationSchema } from "../registration.schema";
import {
  RegistrationFormData,
  useRegistrationForm,
} from "../RegistrationFormContext";

type FormStepPersonalInfoProps = {
  onClickNext: () => void;
};

const FormStepPersonalInfo: React.FC<FormStepPersonalInfoProps> = ({
  onClickNext,
}) => {
  const t = useI18n();
  const { currentForm, setCurrentForm } = useRegistrationForm();
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      ...currentForm,
      termsAndCondition: false,
    },
  });

  const onSubmit = (values: RegistrationFormData) => {
    console.log(values);
    setCurrentForm(values);
    onClickNext();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Form<RegistrationFormData> form={form} blocks={registrationFormBlocks} />

      <Box mt="32px">
        <InputCheckbox name="termsAndCondition" form={form}>
          {t("registrationFields.termsAndCondition.label", {
            termsAndCondition: (
              <Link href={PAGE_ROUTES.TermsAndConditions} target="_blank">
                <Text
                  as="span"
                  color="var(--color-brown)"
                  textDecor="underline"
                >
                  {t("termsAndCondition")}
                </Text>
              </Link>
            ),
            privacyPolicy: (
              <Link href={PAGE_ROUTES.PrivacyPolicy} target="_blank">
                <Text
                  as="span"
                  color="var(--color-brown)"
                  textDecor="underline"
                >
                  {t("privacyPolicy")}
                </Text>
              </Link>
            ),
          })}
        </InputCheckbox>
      </Box>

      <Box mt="44px">
        <Button minW="217px" type="submit">
          {t("buttons.next")}
        </Button>
      </Box>
    </form>
  );
};

export default FormStepPersonalInfo;
