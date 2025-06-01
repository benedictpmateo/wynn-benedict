"use client";
import InputOTP from "@/components/InputOTP";
import { toaster } from "@/components/Toaster";
import usePostUserVerifyOTPCode from "@/lib/api/usePostUserVerifyOTPCode";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRegistrationForm } from "../RegistrationFormContext";
import {
  SendCodeTypeValue,
  VerifyOTPFormData,
  verifyOTPSchema,
} from "./form-step-otp-verifcation.const";

type VerifyOTPProps = {
  sendCodeTo: SendCodeTypeValue;
  onClickBack: () => void;
  onClickNext: () => void;
};

const VerifyOTP: React.FC<VerifyOTPProps> = ({
  sendCodeTo,
  onClickBack,
  onClickNext,
}) => {
  const { currentForm } = useRegistrationForm();
  const { mutate: submitVerifyOTP, isPending } = usePostUserVerifyOTPCode();
  const form = useForm({
    defaultValues: {
      otpCode: [],
    },
    resolver: zodResolver(verifyOTPSchema),
  });

  const onSubmit = (values: VerifyOTPFormData) => {
    submitVerifyOTP(
      {
        email: currentForm?.email,
        otpCode: values.otpCode.join(""),
      },
      {
        onSuccess() {
          toaster.create({
            title: "Successfully verified code",
            type: "success",
          });
          onClickNext();
        },
      }
    );
  };

  const onClickResend = () => {
    //
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
              Please check your {sendCodeTo}.
            </Text>
            <Text
              fontSize="16px"
              lineHeight="20px"
              color="var(--color-text-100)"
            >
              We&apos;ve sent a code to{" "}
              {sendCodeTo === SendCodeTypeValue.Email
                ? currentForm.email
                : currentForm.phone}
            </Text>
          </Box>
          <Flex justify="center" w="full" mb="18px">
            <InputOTP name="otpCode" form={form} />
          </Flex>
          <Text textAlign="center" color="var(--color-text-100)">
            Didn’t get a code?{" "}
            <Link
              as="span"
              textDecor="underline"
              color="var(--color-text-100)"
              onClick={() => onClickResend()}
            >
              Click to resend.
            </Link>
          </Text>
        </Box>

        <Flex gap={{ base: "12px", md: "40px" }}>
          <Button
            flex={1}
            type="button"
            onClick={onClickBack}
            variant="outline"
            colorPalette="brandGreen"
            h="56px"
            fontSize="16px"
            _active={{
              background:
                "color-mix(in srgb, var(--color-green) 60%, transparent) !important",
              borderWidth: "1.5px",
              borderColor: "var(--color-green)",
              color: "var(--color-white)",
            }}
            _hover={{
              background:
                "color-mix(in srgb, var(--color-green) 90%, transparent)",
              color: "var(--color-white)",
            }}
          >
            BACK
          </Button>
          <Button
            flex={1}
            type="submit"
            colorPalette="brandGreen"
            h="56px"
            fontSize="16px"
            loading={isPending}
            _active={{
              background:
                "color-mix(in srgb, var(--color-green) 60%, transparent) !important",
              borderWidth: "1.5px",
              borderColor: "var(--color-green)",
              color: "var(--color-white)",
            }}
            _hover={{
              background:
                "color-mix(in srgb, var(--color-green) 90%, transparent)",
              color: "var(--color-white)",
            }}
          >
            NEXT
          </Button>
        </Flex>
      </Box>
    </form>
  );
};

export default VerifyOTP;
