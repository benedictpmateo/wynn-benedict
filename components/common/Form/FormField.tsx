import { Field, Flex } from "@chakra-ui/react";
import { FormFieldType } from "@/lib/configs/form-types";
import { Control, Controller, FieldValues } from "react-hook-form";
import Tooltip from "../Tooltip";
import IconInfo from "@/public/assets/icons/info.svg";
import Input from "../Input";

type FormFieldProps = {
  field: FormFieldType;
  control: Control<FieldValues>;
};

const FormField: React.FC<FormFieldProps> = ({
  field: { name, label, tooltip, mandatory, placeholder },
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <Field.Root invalid={!!props?.fieldState?.error?.message}>
          <Flex justify="space-between" align="center" w="full">
            <Field.Label
              fontFamily="heading"
              letterSpacing="0.5px"
              fontSize="14px"
              lineHeight="18px"
              color="var(--color-black)"
            >
              {label} {mandatory ? "*" : ""}
            </Field.Label>
            {!!tooltip && (
              <Tooltip content={tooltip}>
                <IconInfo />
              </Tooltip>
            )}
          </Flex>
          <Input placeholder={placeholder} />
          {!!props?.fieldState?.error?.message && (
            <Field.ErrorText>
              {props?.fieldState?.error?.message}
            </Field.ErrorText>
          )}
        </Field.Root>
      )}
    />
  );
};

export default FormField;
