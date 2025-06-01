import { FOOTER_SOCIAL_ICONS } from "@/lib/configs/landing-page";
import { useI18n } from "@/locales/client";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import classes from "./footer.module.css";

type FooterItemProps = {
  // label: string;
  /**
   * @description if href has value, means this FooterItem is a link
   */
  href?: string;
};

const FooterSocialIcons: React.FC<FooterItemProps> = () => {
  const t = useI18n();
  return (
    <Box>
      <Text fontSize="11px" lineHeight="24px" letterSpacing="1px" mb="6px">
        {t("footer.connectWithUs")}
      </Text>
      <Flex gap="33px">
        {FOOTER_SOCIAL_ICONS.map((socialIcon, i) => {
          const IconComponent = socialIcon.icon;
          return (
            <IconButton
              variant="plain"
              className={classes["footer-icons__btn"]}
              key={i}
            >
              <IconComponent />
            </IconButton>
          );
        })}
      </Flex>
    </Box>
  );
};

export default FooterSocialIcons;
