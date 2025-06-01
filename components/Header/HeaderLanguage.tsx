import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import IconArrowDown from "@/public/assets/icons/arrow-down.svg";
import { Box, Button, Menu, Portal, Text } from "@chakra-ui/react";

const HeaderLanguage = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <Menu.Root onSelect={(e) => changeLocale(e.value as typeof locale)}>
      <Menu.Trigger asChild>
        <Button
          variant="plain"
          size="sm"
          outline={0}
          letterSpacing="0.5px"
          alignItems="center"
        >
          <Text fontSize="14px" lineHeight="17px" letterSpacing="0.5px">
            {locale.toUpperCase()}
          </Text>
          <Box pt="6px">
            <IconArrowDown />
          </Box>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="en">English</Menu.Item>
            <Menu.Item value="ar">Arabic</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default HeaderLanguage;
