"use client";

import { FormFieldType } from "@/lib/configs/form-types";
import useDirection from "@/lib/hooks/useDirection";
import { useI18n } from "@/locales/client";
import {
  Select as ChakraSelect,
  Flex,
  useSelectContext,
} from "@chakra-ui/react";
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";
import classes from "./select.module.css";
import { SelectItemType } from "./select.types";
import useSelectCollections from "./useSelectCollections";

type InputSelectProps<T> = {
  field: FormFieldType;
  form: UseFormReturn<T & FieldValues>;
  invalid?: boolean;
};

const InputSelectValue = ({ placeholder }: { placeholder?: string }) => {
  const select = useSelectContext();
  const items = select.selectedItems as Array<SelectItemType>;
  const selectedItem = items?.[0];
  const dir = useDirection();
  return (
    <ChakraSelect.ValueText
      dir={dir}
      placeholder={placeholder}
      color={!selectedItem ? "var(--color-placeholder)" : undefined}
    >
      {selectedItem ? (
        <Flex gap="8px" align="center">
          {selectedItem?.icon} {selectedItem?.label}
        </Flex>
      ) : undefined}
    </ChakraSelect.ValueText>
  );
};

function InputSelect<T>({
  field: { name, placeholder, options, optionsDictionary },
  form,
}: InputSelectProps<T>) {
  const { items, collection } = useSelectCollections({
    options: options,
    optionsDictionary: optionsDictionary,
  });

  const {
    field,
    fieldState: { invalid },
  } = useController({
    name: name as Path<T & FieldValues>,
    control: form.control,
  });
  const t = useI18n();
  const dir = useDirection();

  return (
    <ChakraSelect.Root
      dir={dir}
      name={name}
      value={[field.value]}
      invalid={invalid}
      onValueChange={({ value }) => field.onChange(value[0])}
      onInteractOutside={() => field.onBlur()}
      collection={collection}
    >
      <ChakraSelect.HiddenSelect ref={field.ref} />
      <ChakraSelect.Control dir={dir}>
        <ChakraSelect.Trigger className={classes["select__trigger"]} dir={dir}>
          <InputSelectValue
            placeholder={placeholder ? t(placeholder as never) : undefined}
          />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup paddingEnd="20px">
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>

      <ChakraSelect.Positioner>
        <ChakraSelect.Content>
          {items.map((item) => (
            <ChakraSelect.Item
              dir={dir}
              key={item.value}
              item={item.value}
              css={{
                py: "12px",
                cursor: "pointer",
                justifyContent: "start",
              }}
            >
              {item?.icon} {t(item.label as never)}
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </ChakraSelect.Content>
      </ChakraSelect.Positioner>
    </ChakraSelect.Root>
  );
}

InputSelect.displayName = "InputSelect";

export default InputSelect;
