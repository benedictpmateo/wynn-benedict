"use client";
import {
  FieldComponentTypeEnum,
  FormFieldType,
} from "@/lib/configs/form-types";
import { useI18n } from "@/locales/client";
import IconInfo from "@/public/assets/icons/info.svg";
import { Field, Flex } from "@chakra-ui/react";
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";
import InputPhone from "../InputPhone";
import InputSelect from "../InputSelect";
import InputText from "../InputText";
import Tooltip from "../Tooltip";

type FormFieldProps<T> = {
  field: FormFieldType;
  form: UseFormReturn<T & FieldValues>;
};

function FormField<T>({ field, form }: FormFieldProps<T>) {
  const { label, tooltip, mandatory, componentType } = field;
  const {
    fieldState: { invalid, error },
  } = useController({
    name: field.name as Path<T & FieldValues>,
    control: form.control,
  });
  const t = useI18n();

  return (
    <Field.Root invalid={invalid}>
      <Flex justify="space-between" align="center" w="full">
        <Field.Label
          fontFamily="heading"
          letterSpacing="0.5px"
          fontSize="14px"
          lineHeight="18px"
          color="var(--color-black)"
        >
          {t(label as never)} {mandatory ? "*" : ""}
        </Field.Label>
        {!!tooltip && (
          <Tooltip content={t(tooltip as never)}>
            <IconInfo />
          </Tooltip>
        )}
      </Flex>
      {componentType === FieldComponentTypeEnum.InputText && (
        <InputText<T> field={field} form={form} />
      )}
      {componentType === FieldComponentTypeEnum.InputSelect && (
        <InputSelect<T> field={field} form={form} />
      )}
      {componentType === FieldComponentTypeEnum.InputPhone && (
        <InputPhone<T> field={field} form={form} />
      )}
      {!!error?.message && <Field.ErrorText>{error?.message}</Field.ErrorText>}
    </Field.Root>
  );
}

export default FormField;
