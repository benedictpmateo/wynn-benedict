import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient({
  en: async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return import("./messages/en");
  },
  ar: async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return import("./messages/ar");
  },
});
