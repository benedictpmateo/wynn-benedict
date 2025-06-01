import { countries, CountryType } from "@/lib/configs/countries";
import { FormFieldType } from "@/lib/configs/form-types";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import IconChevronDown from "@/public/assets/icons/chevron-down.svg";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from "react-hook-form";
import { IMaskInput } from "react-imask";
import InputPhoneCountries from "./InputPhoneCountries";
import classes from "./phone.module.css";

type InputPhoneProps<T> = {
  field: FormFieldType;
  form: UseFormReturn<FieldValues & T>;
};

function InputPhone<T>({ field, form }: InputPhoneProps<T>) {
  const ref = useRef(null);
  const [country, setCountry] = useState<CountryType>(countries[0]);
  const { open, onToggle, onClose } = useDisclosure();

  const {
    field: formField,
    fieldState: { invalid },
  } = useController({
    name: field.name as Path<T & FieldValues>,
    control: form.control,
  });

  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  const onCountryChange = (item: CountryType) => {
    setCountry(item);
    formField.onChange("");
    onClose();
  };

  const onChangeInput = (value: string) => {
    formField.onChange({ target: { name: field.name, value } });
  };

  return (
    <Box
      ref={ref}
      className={clsx(classes["phone"], {
        [classes["phone--error"]]: invalid,
      })}
    >
      <Flex align="center" h="full" gap="4px">
        <Flex onClick={onToggle} className={classes["phone__country-toggle"]}>
          <Image
            width={20}
            height={20}
            alt={country?.label}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.value}.svg`}
          />
          <Box>
            <IconChevronDown />
          </Box>
        </Flex>
        <Box flex={1}>
          <IMaskInput
            inputRef={formField.ref}
            value={formField.value}
            onAccept={(value) => onChangeInput(value)}
            className={clsx(classes["phone__input"])}
            mask={country?.phoneMask}
            placeholderChar="_"
            placeholder={country?.phoneMask.replace(/0/g, "_")}
            lazy={false}
            as="input"
          />
        </Box>
      </Flex>

      {open ? (
        <InputPhoneCountries
          country={country}
          data={countries}
          onChange={onCountryChange}
        />
      ) : null}
    </Box>
  );
}

export default InputPhone;
