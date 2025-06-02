import { CountryType } from "@/lib/configs/countries";
import IconCheck from "@/public/assets/icons/check.svg";
import IconSearch from "@/public/assets/icons/search.svg";
import { Box, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import classes from "./phone.module.css";

type InputPhoneCountriesProps = {
  country?: CountryType;
  data: CountryType[];
  onChange: (args: CountryType) => void;
};

const InputPhoneCountries = ({
  country,
  data,
  onChange,
}: InputPhoneCountriesProps) => {
  const [filteredList, setFilteredList] = useState(data);

  const handleSearch = (value: string) => {
    const result: CountryType[] =
      data?.filter((item: CountryType) => {
        return item.label?.toLowerCase().includes(value?.toLowerCase());
      }) || [];
    setFilteredList(result);
  };

  return (
    <Box className={classes["phone-countries__root"]}>
      <Box position="sticky" top="0" bg="white">
        <InputGroup startElement={<IconSearch />}>
          <Input
            type="search"
            className={classes["phone-countries__input"]}
            autoComplete="off"
            placeholder="Search"
            onChange={(event) => handleSearch(event.target.value)}
          />
        </InputGroup>
      </Box>

      <Box>
        {filteredList.length === 0 && (
          <Box px="16px" py="12px">
            <Text color="var(--color-text-200)">No countries found.</Text>
          </Box>
        )}
        {filteredList?.map((item: CountryType, index: number) => (
          <Flex
            key={index}
            padding="10px 14px"
            cursor="pointer"
            fontWeight="500"
            textTransform="capitalize"
            gap="8px"
            color="var(--color-select-text)"
            transition="all 200ms ease"
            _hover={{ bg: "var(--color-select-active)" }}
            backgroundColor={
              item?.value === country?.value
                ? "var(--color-select-active)"
                : undefined
            }
            css={
              item?.value === country?.value
                ? { backgroundColor: "var(--color-select-active)" }
                : {}
            }
            onClick={() => {
              onChange(item);
            }}
          >
            <Image
              width={20}
              height={20}
              alt={item.label}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.value}.svg`}
            />
            <Text as="span">{item.label}</Text>
            {item?.value === country?.value && (
              <Box marginInlineStart="auto">
                <IconCheck />
              </Box>
            )}
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default InputPhoneCountries;
