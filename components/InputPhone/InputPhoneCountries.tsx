import { CountryType } from "@/lib/configs/countries";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
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
        <Input
          type="search"
          className={classes["phone-countries__input"]}
          autoComplete="off"
          placeholder="Search"
          onChange={(event) => handleSearch(event.target.value)}
        />
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
            padding="12px 16px"
            cursor="pointer"
            fontWeight="500"
            textTransform="capitalize"
            gap="8px"
            onClick={() => {
              onChange(item);
            }}
            style={{ transition: "all .125s ease" }}
            _hover={{ bg: "gray.50", color: "#396070" }}
            css={
              item?.value === country?.value
                ? { backgroundColor: "gray.50", color: "#396070" }
                : { color: "#ACB9C4" }
            }
          >
            <Image
              width={20}
              height={20}
              alt={item.label}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.value}.svg`}
            />
            <Text as="span">{item.label}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default InputPhoneCountries;
