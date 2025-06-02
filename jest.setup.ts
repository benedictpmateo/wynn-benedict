/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";
import en from "./locales/messages/en";

global.structuredClone = (v) => (v ? JSON.parse(JSON.stringify(v)) : {});

jest.mock("@/locales/client", () => ({
  useI18n: () => (key: string) => {
    return key.split(".").reduce((obj, k) => ((obj || {}) as any)[k], en);
  },
  useCurrentLocale: () => "en",
  useChangeLocale: (key: string) => key,
}));
