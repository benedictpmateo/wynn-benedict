"use client";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import "./globals.css";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-avenir)" },
        heading: { value: "var(--font-bigcaslon)" },
      },
      colors: {
        brandGreen: {
          solid: { value: "var(--color-green)" },
          contrast: { value: "var(--color-white)" },
          muted: { value: "var(--color-green)" },
          fg: { value: "var(--color-green)" },
        },
      },
    },
  },
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <body>
        <ChakraProvider value={system}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
