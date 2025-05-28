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
      <Box maxW={MAX_W_CONTAINER} mx="auto" px="70px" py="20px">
        <Flex justify="space-between" align="center">
          <Text fontFamily="heading" fontSize="21px" lineHeight="24px">
            Get News & Updates
          </Text>

          <Text maxW="370px">
            Get latest developments and exciting news on how we are shaping the
            future!
          </Text>

          <form>
            <Flex className={classes["cta__form"]} onClick={handleClick}>
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
