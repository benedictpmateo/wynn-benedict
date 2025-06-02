"use client";
import { useCurrentLocale } from "@/locales/client";
import Locale from "intl-locale-textinfo-polyfill";
import { useMemo } from "react";

function useDirection() {
  const locale = useCurrentLocale();
  const dir = useMemo(() => {
    const { direction } = new Locale(locale).textInfo;
    return direction;
  }, [locale]);

  return dir;
}

export default useDirection;
