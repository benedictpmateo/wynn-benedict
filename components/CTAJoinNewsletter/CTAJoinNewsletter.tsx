"use client";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import { useI18n } from "@/locales/client";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toaster } from "../Toaster";
import classes from "./cta-join-newsletter.module.css";

const CTAJoinNewsletter = () => {
  const t = useI18n();
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = () => {
    form.reset({
      email: "",
    });
    toaster.create({
      title: "Successfully joined the newsletter",
      type: "success",
    });
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
              {t("newsLetter.title")}
            </Text>

            <Text maxW="370px" color="var(--color-text-200)">
              {t("newsLetter.message")}
            </Text>
          </Flex>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Flex
              className={classes["cta__form"]}
              direction={{ base: "column", md: "row" }}
            >
              <Input
                {...form.register("email", {
                  required: "This is required",
                })}
                className={classes["cta__input"]}
                placeholder={t("newsLetter.email")}
                variant="outline"
                type="email"
              />
              <Button
                className={classes["cta__btn"]}
                variant="outline"
                type="submit"
              >
                {t("newsLetter.actionBtn")}
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

export default CTAJoinNewsletter;
