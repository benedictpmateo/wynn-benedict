"use client";
import { countries, CountryType } from "@/lib/configs/countries";
import { FormFieldType } from "@/lib/configs/form-types";
import {
  Button,
  Select as ChakraSelect,
  createListCollection,
  Flex,
  useSelectContext,
} from "@chakra-ui/react";
import clsx from "clsx";
import Image from "next/image";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";
import { IMaskInput } from "react-imask";
import classes from "./phone.module.css";

type InputPhoneProps<T> = {
  field: FormFieldType;
  form: UseFormReturn<FieldValues & T>;
};

const PhoneSelectValue = ({ placeholder }: { placeholder?: string }) => {
  const select = useSelectContext();
  const items = select.selectedItems as Array<CountryType>;
  const selectedItem = items?.[0];
  return (
    <ChakraSelect.ValueText
      placeholder={placeholder}
      overflow="unset"
      maxW="unset"
    >
      <Flex gap="4px" align="center">
        <Image
          width={20}
          height={20}
          alt={selectedItem.label}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedItem.value}.svg`}
        />
        <ChakraSelect.Indicator />
      </Flex>
    </ChakraSelect.ValueText>
  );
};

type PhoneSelectTriggerProps = {
  field: FormFieldType;
  formField: ControllerRenderProps;
};

function PhoneSelectTrigger({ field, formField }: PhoneSelectTriggerProps) {
  const select = useSelectContext();
  const items = select.selectedItems as Array<CountryType>;
  const selectedItem = items?.[0];
  return (
    <Flex align="center" h="100%" gap="4px" w="100%">
      <Button
        variant="plain"
        px="0"
        bg="white"
        width="auto"
        {...select.getTriggerProps()}
      >
        {select.hasSelectedItems ? (
          <PhoneSelectValue placeholder={field?.placeholder} />
        ) : undefined}
      </Button>
      <IMaskInput
        inputRef={formField.ref}
        value={formField.value}
        onChange={(value) => console.log(value.currentTarget.value)}
        onAccept={(value) => {
          formField.onChange({ target: { name: name, value } });
        }}
        className={clsx(classes["phone__input"])}
        mask={selectedItem?.phoneMask}
        placeholderChar="_"
        placeholder={selectedItem?.phoneMask.replace(/0/g, "_")}
        lazy={false}
        as="input"
      />
    </Flex>
  );
}

function InputPhone<T>({ field, form }: InputPhoneProps<T>) {
  const collection = createListCollection({
    items: countries,
  });
  const {
    field: formField,
    fieldState: { invalid },
  } = useController({
    name: field.name as Path<T & FieldValues>,
    control: form.control,
  });
  return (
    <ChakraSelect.Root
      collection={collection}
      defaultValue={["AE"]}
      onChange={() =>
        form.setValue(field.name as Path<FieldValues & T>, "" as never)
      }
      className={classes["phone__root"]}
      positioning={{ sameWidth: true }}
      invalid={invalid}
    >
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control w="100%" h="100%">
        <PhoneSelectTrigger
          field={field}
          formField={formField as ControllerRenderProps}
        />
      </ChakraSelect.Control>

      <ChakraSelect.Positioner
        css={{
          width: "100% !important",
          "--x": "0 !important",
        }}
      >
        <ChakraSelect.Content minW="100px">
          {countries.map((item, i) => (
            <ChakraSelect.Item
              key={i}
              item={item.value}
              css={{
                py: "12px",
                cursor: "pointer",
                justifyContent: "flex-start",
              }}
            >
              <Image
                width={20}
                height={20}
                alt={item.label}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.value}.svg`}
              />{" "}
              {item.phoneCode} {item.label}
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </ChakraSelect.Content>
      </ChakraSelect.Positioner>
    </ChakraSelect.Root>
  );
}

export default InputPhone;
