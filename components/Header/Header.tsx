"use client";
import { LANDING_PAGE_HEADER_ITEMS } from "@/lib/configs/landing-page";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import useWindowSize from "@/lib/hooks/useWindowSize";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import HeaderLanguage from "./HeaderLanguage";
import HeaderMenu from "./HeaderMenu";
import classes from "./header.module.css";

const Header = () => {
  const { open, onToggle, onClose } = useDisclosure({
    onOpen: () => {
      window?.scrollTo({ top: 0, behavior: "smooth" });
      disableBodyScroll(document.body);
    },
    onClose: () => {
      enableBodyScroll(document.body);
    },
  });

  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width >= 1280) {
      onClose();
    }
  }, [onClose, width]);

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
        position="relative"
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

        <Box
          className={clsx(classes["header-items"], {
            [classes["header-items--open"]]: open,
          })}
        >
          <Flex
            gap="8px"
            align="center"
            direction={{ base: "column", xl: "row" }}
          >
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
        <Flex align="center">
          <HeaderLanguage />
          <HeaderMenu open={open} onToggle={onToggle} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
