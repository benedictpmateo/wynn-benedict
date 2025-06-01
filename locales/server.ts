import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer({
    en: () => import("./messages/en"),
    ar: () => import("./messages/ar"),
  });
