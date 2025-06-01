import IconArrowDown from "@/public/assets/icons/arrow-down.svg";
import { Box, Button, Menu, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";

const HeaderLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  return (
    <Menu.Root onSelect={(e) => setSelectedLanguage(e.value)}>
      <Menu.Trigger asChild>
        <Button
          variant="plain"
          size="sm"
          outline={0}
          letterSpacing="0.5px"
          alignItems="center"
        >
          <Text fontSize="14px" lineHeight="17px" letterSpacing="0.5px">
            {selectedLanguage.toUpperCase()}
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
