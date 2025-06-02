"use client";
import Button from "@/components/Button";
import InputOTP from "@/components/InputOTP";
import { toaster } from "@/components/Toaster";
import usePostResendOTPCode from "@/lib/api/usePostResendOTPCode";
import usePostUserVerifyOTPCode from "@/lib/api/usePostUserVerifyOTPCode";
import useCountdown from "@/lib/hooks/useCountdown";
import { useI18n } from "@/locales/client";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
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
  const t = useI18n();
  const { countdown, isCounting, startCountdown } = useCountdown(60);

  const { currentForm } = useRegistrationForm();
  const { mutate: submitVerifyOTP, isPending } = usePostUserVerifyOTPCode();
  const { mutate: resendOTP } = usePostResendOTPCode();
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
    if (!isCounting) {
      resendOTP(
        { email: currentForm.email },
        {
          onSuccess() {
            startCountdown();

            toaster.create({
              title: "Verification code resent",
              type: "success",
            });
          },
        }
      );
    }
  };
  const resendLink = isCounting ? (
    <Text
      textAlign="center"
      color="var(--color-text-100)"
      opacity={0.6}
      cursor="not-allowed"
    >
      {t("otpVerify.verifyCode.resendCountdown", { seconds: countdown })}
    </Text>
  ) : (
    <Text textAlign="center" color="var(--color-text-100)">
      {t("otpVerify.verifyCode.resend", {
        resendLink: (
          <Link
            as="span"
            textDecor="underline"
            color="var(--color-text-100)"
            onClick={() => onClickResend()}
            cursor={isCounting ? "not-allowed" : "pointer"}
            opacity={isCounting ? 0.7 : 1}
          >
            {t("otpVerify.verifyCode.resendLink")}
          </Link>
        ),
      })}
    </Text>
  );

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
              {t("otpVerify.verifyCode.title", {
                type:
                  sendCodeTo === "phone"
                    ? t("otpVerify.type.phone")
                    : t("otpVerify.type.email"),
              })}
            </Text>
            <Text
              fontSize="16px"
              lineHeight="20px"
              color="var(--color-text-100)"
            >
              {t("otpVerify.verifyCode.message", {
                value:
                  sendCodeTo === SendCodeTypeValue.Email
                    ? currentForm.email
                    : currentForm.phone,
              })}
            </Text>
          </Box>
          <Flex justify="center" w="full" mb="18px">
            <InputOTP name="otpCode" form={form} />
          </Flex>
          {resendLink}
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

export default VerifyOTP;
