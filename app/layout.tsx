"use client";
import {
  Box,
  ChakraProvider,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import "./globals.css";
import Header from "@/components/Header";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import CTAJoinNewsletter from "@/components/CTAJoinNewsletter";
import Footer from "@/components/Footer";

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
        <ChakraProvider value={system}>
          <Box>
            <Header />
            <Box mx="auto" maxW={MAX_W_CONTAINER} minH={400}>
              {children}
            </Box>
            <CTAJoinNewsletter />
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
