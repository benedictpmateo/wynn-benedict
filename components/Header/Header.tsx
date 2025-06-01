import { LANDING_PAGE_HEADER_ITEMS } from "@/lib/configs/landing-page";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import HeaderLanguage from "./HeaderLanguage";

const Header = () => {
  return (
    <Box bg="white">
      <Flex
        align="center"
        justify="space-between"
        gap="40px"
        maxW={MAX_W_CONTAINER}
        mx="auto"
        px={{ base: "24px", lg: "60px" }}
        py="24px"
        transition="all"
      >
        <Box cursor="pointer">
          <Link href="/">
            <Image
              src="/assets/logo/logo-wynn-resorts.png"
              alt="Wynn Resorts Logo"
              width={160}
              height={78}
              priority
            />
          </Link>
        </Box>

        <Box display={{ base: "none", xl: "block" }}>
          <Flex gap="8px" align="center">
            {LANDING_PAGE_HEADER_ITEMS.map((headerItem) => (
              <Button
                variant="plain"
                key={headerItem.label}
                type="button"
                asChild
                py="2"
                h="auto"
                className="animate-link-underline hover-brown"
                color="var(--color-black)"
              >
                <Link href={headerItem.href}>
                  <Text fontSize="14px" lineHeight="17px" letterSpacing="0.5px">
                    {headerItem.label}
                  </Text>
                </Link>
              </Button>
            ))}
          </Flex>
        </Box>
        <Box>
          <HeaderLanguage />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
