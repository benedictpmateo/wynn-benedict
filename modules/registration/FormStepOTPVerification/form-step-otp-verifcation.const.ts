import { z } from "zod";

export enum OTPStepsEnum {
  SendCode = "SendCode",
  VerifyOTP = "VerifyOTP",
}

export enum SendCodeTypeValue {
  Phone = "phone",
  Email = "email",
}

// schemas
export const sendCodeSchema = z.object({
  sendCode: z.string(),
});

export const verifyOTPSchema = z.object({
  otpCode: z
    .array(z.string().min(1), { required_error: "Pin is required" })
    .length(4, { message: "Pin must be 4 digits long" }),
});

// types
export type SendCodeFormData = z.infer<typeof sendCodeSchema>;

export type VerifyOTPFormData = z.infer<typeof verifyOTPSchema>;
