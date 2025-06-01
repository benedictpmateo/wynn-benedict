"use client";
import { Field, PinInput } from "@chakra-ui/react";
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";
import classes from "./otp.module.css";

type InputOTPProps<T> = {
  name: string;
  form: UseFormReturn<FieldValues & T>;
};

function InputOTP<T>({ name, form }: InputOTPProps<T>) {
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
  } = useController({
    name: name as Path<T & FieldValues>,
    control: form.control,
  });

  return (
    <Field.Root invalid={invalid}>
      <PinInput.Root
        name={name}
        value={value}
        onValueChange={(e) => onChange(e.value)}
        mx="auto"
      >
        <PinInput.HiddenInput ref={ref} />
        <PinInput.Control>
          <PinInput.Input index={0} className={classes["otp__input"]} />
          <PinInput.Input index={1} className={classes["otp__input"]} />
          <PinInput.Input index={2} className={classes["otp__input"]} />
          <PinInput.Input index={3} className={classes["otp__input"]} />
        </PinInput.Control>
      </PinInput.Root>
    </Field.Root>
  );
}

export default InputOTP;
