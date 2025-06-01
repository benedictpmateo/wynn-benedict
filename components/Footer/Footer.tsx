import {
  FOOTER_CONTACT_INFORMATION,
  FOOTER_LINKS_COLLECTIONS,
  FOOTER_LINKS_LEGALS_INFORMATIONS,
  FOOTER_LINKS_LOCATIONS,
} from "@/lib/configs/landing-page";
import { MAX_W_FOOTER_CONTAINER } from "@/lib/configs/layout";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import FooterItem from "./FooterItem";
import FooterSocialIcons from "./FooterSocialIcons";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <Box className={classes["footer"]}>
      <VStack
        maxW={MAX_W_FOOTER_CONTAINER}
        mx="auto"
        py="40px"
        gap="60px"
        px={{ base: "16px", xl: 0 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap={{ md: "wrap", xl: "nowrap" }}
          align="flex-start"
          justify="space-between"
          gap={{ base: "20px", md: "40px" }}
          w="100%"
          maxW={{ base: "300px", md: "800px", xl: "unset" }}
        >
          {/* Column 1 - Collections */}
          <Flex
            direction="column"
            gap="2px"
            flex={{ base: "1", md: "0 0 calc(50% - 20px)", xl: "1" }}
          >
            {FOOTER_LINKS_COLLECTIONS.map(({ label, href }, i) => (
              <FooterItem key={i} label={label} href={href} />
            ))}
          </Flex>

          {/* Column 2 - Legals */}
          <Flex
            direction="column"
            gap="2px"
            flex={{ base: "1", md: "0 0 calc(50% - 20px)", xl: "1" }}
          >
            {FOOTER_LINKS_LEGALS_INFORMATIONS.map(({ label, href }, i) => (
              <FooterItem key={i} label={label} href={href} />
            ))}
          </Flex>

          {/* Column 3 - Locations */}
          <Flex
            direction="column"
            gap="2px"
            flex={{ base: "1", md: "0 0 calc(50% - 20px)", xl: "1" }}
            display={{ base: "flex", md: "flex", xl: "flex" }}
          >
            {FOOTER_LINKS_LOCATIONS.map(({ label, href }, i) => (
              <FooterItem key={i} label={label} href={href} />
            ))}
          </Flex>

          {/* Column 4 - Contact & Social */}
          <Box
            flex={{ base: "1", md: "0 0 calc(50% - 20px)", xl: "1" }}
            width={{ base: "100%", xl: "auto" }}
          >
            <Flex direction="column" mb="20px" gap="2px">
              {FOOTER_CONTACT_INFORMATION.map((text, i) => (
                <FooterItem key={i} label={text} />
              ))}
            </Flex>
            <FooterSocialIcons />
          </Box>
        </Flex>

        <Box textAlign="center">
          <Text
            fontSize="11px"
            lineHeight="17px"
            letterSpacing="0.5px"
            mb="2.5"
          >
            Do Not Sell Or Share My Data
          </Text>
          <Text fontSize="11px" lineHeight="17px" letterSpacing="0.5px">
            &copy; 2024 Wynn Resorts Holdings, LLC. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Footer;
