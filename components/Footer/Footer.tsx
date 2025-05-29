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
      <VStack maxW={MAX_W_FOOTER_CONTAINER} mx="auto" py="40px" gap="60px">
        <Flex
          align="flex-start"
          justify="space-between"
          gap="40px"
          transition="all"
          w="100%"
        >
          <Flex direction="column" gap="2px">
            {FOOTER_LINKS_COLLECTIONS.map(({ label, href }, i) => (
              <FooterItem key={i} label={label} href={href} />
            ))}
          </Flex>
          <Flex direction="column" gap="2px">
            {FOOTER_LINKS_LEGALS_INFORMATIONS.map(({ label, href }, i) => (
              <FooterItem key={i} label={label} href={href} />
            ))}
          </Flex>
          <Flex direction="column" gap="2px">
            {FOOTER_LINKS_LOCATIONS.map(({ label, href }, i) => (
              <FooterItem key={i} label={label} href={href} />
            ))}
          </Flex>
          <Box>
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
