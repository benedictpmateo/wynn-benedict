"use client";
import Button from "@/components/Button";
import { toaster } from "@/components/Toaster";
import usePostUserRegistration from "@/lib/api/usePostUserRegistration";
import { useI18n } from "@/locales/client";
import { Box, Flex, RadioCard, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { sendCodeOptions } from "../registration.const";
import { useRegistrationForm } from "../RegistrationFormContext";
import {
  SendCodeFormData,
  sendCodeSchema,
  SendCodeTypeValue,
} from "./form-step-otp-verifcation.const";

type SendCodeProps = {
  onClickBack: () => void;
  onClickNext: (value: SendCodeTypeValue) => void;
};

const SendCode: React.FC<SendCodeProps> = ({ onClickBack, onClickNext }) => {
  const t = useI18n();
  const { currentForm } = useRegistrationForm();
  const { mutate: submitUser, isPending } = usePostUserRegistration();

  const form = useForm({
    defaultValues: {
      sendCode: "email",
    },
    resolver: zodResolver(sendCodeSchema),
  });

  const { field } = useController({
    name: "sendCode",
    control: form.control,
  });

  const onSubmit = (values: SendCodeFormData) => {
    submitUser(
      {
        ...currentForm,
        sendTo: values.sendCode as SendCodeTypeValue,
      },
      {
        onSuccess() {
          toaster.create({
            title: "Successfully sent code",
            type: "success",
          });
          onClickNext(values.sendCode as SendCodeTypeValue);
        },
      }
    );
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Box>
        <Box mt="32px" mb="40px" bg="white" rounded="4px" p="24px">
          <Box textAlign="center" mb="20px">
            <Text
              fontFamily="heading"
              fontSize="20px"
              lineHeight="28px"
              mb="16px"
            >
              {t("otpVerify.sendCode.title")}
            </Text>
            <Text
              fontSize="16px"
              lineHeight="20px"
              color="var(--color-text-100)"
            >
              {t("otpVerify.sendCode.message")}
            </Text>
          </Box>
          <Flex>
            <RadioCard.Root
              w="full"
              value={field.value}
              onValueChange={(radio) => field.onChange(radio.value)}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="center"
                gap="20px"
              >
                {sendCodeOptions.map(({ value, label }) => (
                  <RadioCard.Item
                    key={value}
                    value={value}
                    p="12px"
                    flex="unset"
                    border={0}
                    outline={0}
                    boxShadow="none"
                  >
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl py="12px">
                      <RadioCard.ItemIndicator
                        colorPalette="brandGreen"
                        color="brandGreen.solid"
                        borderColor="var(--color-border-dark)"
                      />
                      <RadioCard.ItemText
                        fontSize="16px"
                        lineHeight="20px"
                        letterSpacing="0.5px"
                      >
                        {t(label as never)}
                      </RadioCard.ItemText>
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </Flex>
            </RadioCard.Root>
          </Flex>
        </Box>

        <Flex gap={{ base: "12px", md: "40px" }}>
          <Button type="button" onClick={onClickBack} variant="outline">
            {t("buttons.back")}
          </Button>
          <Button type="submit" loading={isPending}>
            {t("buttons.next")}
          </Button>
        </Flex>
      </Box>
    </form>
  );
};

export default SendCode;
