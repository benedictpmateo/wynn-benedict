import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ChakraButton
      flex={1}
      h="56px"
      fontSize="16px"
      colorPalette="brandGreen"
      _active={{
        background:
          "color-mix(in srgb, var(--color-green) 60%, transparent) !important",
        borderWidth: "1.5px",
        borderColor: "var(--color-green)",
        color: "var(--color-white)",
      }}
      _hover={{
        background: "color-mix(in srgb, var(--color-green) 90%, transparent)",
        color: "var(--color-white)",
      }}
      {...props}
    />
  );
};

export default Button;
