"use client";
import { countries } from "@/lib/configs/countries";
import { FieldOptionDictionaryEnum } from "@/lib/configs/form-types";
import { createListCollection } from "@chakra-ui/react";
import Image from "next/image";
import { useMemo } from "react";
import { SelectItemType } from "./select.types";

type UseSelectCollectionsProps = {
  options?: SelectItemType[];
  optionsDictionary?: FieldOptionDictionaryEnum;
};

const useSelectCollections = ({
  options,
  optionsDictionary,
}: UseSelectCollectionsProps) => {
  const items = useMemo(() => {
    if (optionsDictionary) {
      switch (optionsDictionary) {
        case FieldOptionDictionaryEnum.CountryList:
          return countries.map((item) => ({
            ...item,
            icon: (
              <Image
                width={20}
                height={20}
                alt={item.label}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.value}.svg`}
              />
            ),
          }));
      }
    }
    return options || [];
  }, [optionsDictionary, options]);

  const collection = createListCollection({
    items: items as unknown[],
  });

  return {
    collection,
    items,
  };
};

export default useSelectCollections;
