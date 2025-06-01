import { Box, Text } from "@chakra-ui/react";
import clsx from "clsx";

import classes from "./header.module.css";

type HeaderMenuProps = {
  open: boolean;
  onToggle: () => void;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ open, onToggle }) => {
  return (
    <Box
      className={classes["header__menu"]}
      display={{ base: "block", xl: "none" }}
    >
      <Box
        className={clsx(classes["header__menu-trigger"], {
          [classes["header__menu--open"]]: open,
        })}
        onClick={() => onToggle()}
      >
        <Text as="span" className={classes["header__menu-item"]}></Text>
        <Text as="span" className={classes["header__menu-item"]}></Text>
        <Text as="span" className={classes["header__menu-item"]}></Text>
      </Box>
    </Box>
  );
};

export default HeaderMenu;
