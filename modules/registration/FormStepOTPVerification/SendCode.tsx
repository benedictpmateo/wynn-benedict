"use client";
import { Box, Button, Flex, RadioCard, Text } from "@chakra-ui/react";
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
  const { currentForm } = useRegistrationForm();

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
    switch (values.sendCode) {
      case SendCodeTypeValue.Phone:
        console.log(currentForm.phone);
        break;
      case SendCodeTypeValue.Email:
        console.log(currentForm.email);
        break;
    }
    onClickNext(values.sendCode as SendCodeTypeValue);
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
              Send Code
            </Text>
            <Text
              fontSize="16px"
              lineHeight="20px"
              color="var(--color-text-100)"
            >
              How would you like to receive the code?
            </Text>
          </Box>
          <Flex>
            <RadioCard.Root
              w="full"
              value={field.value}
              onValueChange={(radio) => field.onChange(radio.value)}
            >
              <Flex justify="center" gap="20px">
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
                        {label}
                      </RadioCard.ItemText>
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </Flex>
            </RadioCard.Root>
          </Flex>
        </Box>

        <Flex gap="40px">
          <Button
            flex={1}
            type="button"
            onClick={onClickBack}
            variant="outline"
            colorPalette="brandGreen"
            h="56px"
            fontSize="16px"
          >
            BACK
          </Button>
          <Button
            flex={1}
            type="submit"
            minW="217px"
            colorPalette="brandGreen"
            h="56px"
            fontSize="16px"
          >
            NEXT
          </Button>
        </Flex>
      </Box>
    </form>
  );
};

export default SendCode;
