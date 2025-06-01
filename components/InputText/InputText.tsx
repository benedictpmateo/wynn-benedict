"use client";
import { FormFieldType } from "@/lib/configs/form-types";
import { Input as ChakraInput } from "@chakra-ui/react";
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";

type InputTextProps<T> = {
  field: FormFieldType;
  form: UseFormReturn<FieldValues & T>;
};

function InputText<T>({ field, form }: InputTextProps<T>) {
  const {
    field: { ref, name, onChange, onBlur, value },
  } = useController({
    name: field.name as Path<T & FieldValues>,
    control: form.control,
  });

  return (
    <ChakraInput
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={field?.placeholder}
      css={{
        "--chakra-border-color": "var(--color-border)",
        "--error-color": "var(--color-error)",
        bg: "var(--color-white)",
        fontSize: "16px",
        height: "60px",
        lineHeight: "24px",
        py: "18px",
        px: "20px",
        rounded: "4px",
        _placeholder: {
          color: "var(--color-placeholder)",
        },
        _invalid: {
          borderWidth: 1.5,
        },
      }}
    />
  );
}

export default InputText;
