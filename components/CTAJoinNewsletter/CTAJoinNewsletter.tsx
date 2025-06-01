"use client";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRef } from "react";
import classes from "./cta-join-newsletter.module.css";

const CTAJoinNewsletter = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <Box transition="all" bg="white">
      <Box
        maxW={MAX_W_CONTAINER}
        mx="auto"
        px={{ base: "16px", lg: "70px" }}
        py={{ base: "24px", xl: "20px" }}
      >
        <Flex
          justify="space-between"
          gap={{ base: "20px", lg: "70px" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            justify="space-between"
            gap="8px"
            align={{ base: "flex-start", xl: "center" }}
            direction={{ base: "column", xl: "row" }}
            flex={1}
          >
            <Text
              fontFamily="heading"
              fontSize="21px"
              lineHeight="24px"
              color="var(--color-text-900)"
            >
              Get News & Updates
            </Text>

            <Text maxW="370px" color="var(--color-text-200)">
              Get latest developments and exciting news on how we are shaping
              the future!
            </Text>
          </Flex>

          <form>
            <Flex
              className={classes["cta__form"]}
              onClick={handleClick}
              direction={{ base: "column", md: "row" }}
            >
              <Input
                ref={inputRef}
                className={classes["cta__input"]}
                placeholder="Your email address"
                variant="outline"
                type="email"
              />
              <Button
                className={classes["cta__btn"]}
                variant="outline"
                type="submit"
              >
                JOIN THE NEWSLETTER
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

export default CTAJoinNewsletter;
