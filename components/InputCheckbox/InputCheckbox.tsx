import useDirection from "@/lib/hooks/useDirection";
import { Checkbox as ChakraCheckbox, Field } from "@chakra-ui/react";
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";
import classes from "./checkbox.module.css";

type InputCheckboxProps<T> = {
  name: string;
  form: UseFormReturn<FieldValues & T>;
  children?: React.ReactNode;
};

function InputCheckbox<T>({ name, form, children }: InputCheckboxProps<T>) {
  const {
    field: { ref, onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name: name as Path<T & FieldValues>,
    control: form.control,
  });
  const dir = useDirection();
  return (
    <Field.Root
      invalid={invalid}
      py="12px"
      paddingStart="4px"
      paddingEnd="16px"
    >
      <ChakraCheckbox.Root
        colorPalette="brandGreen"
        name={name}
        onCheckedChange={(value) => onChange(value.checked)}
        checked={value}
        dir={dir}
      >
        <ChakraCheckbox.HiddenInput ref={ref} />
        <ChakraCheckbox.Control className={classes["checkbox__control"]}>
          <ChakraCheckbox.Indicator />
        </ChakraCheckbox.Control>
        <ChakraCheckbox.Label fontSize="16px">{children}</ChakraCheckbox.Label>
      </ChakraCheckbox.Root>
      {!!error?.message && <Field.ErrorText>{error?.message}</Field.ErrorText>}
    </Field.Root>
  );
}

export default InputCheckbox;
