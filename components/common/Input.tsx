import React from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {};

const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(props, ref) {
  return (
    <ChakraInput
      ref={ref}
      {...props}
      css={{
        bg: "var(--color-white)",
        "--chakra-border-color": "var(--color-border)",
        "--error-color": "var(--color-error)",
        fontSize: "16px",
        height: "60px",
        lineHeight: "24px",
        py: "18px",
        px: "20px",
        rounded: "4px",
        "&::placeholder": {
          color: "var(--color-placeholder)",
        },
        "&:is([data-invalid], [aria-invalid=true], [data-state=invalid])": {
          borderWidth: 1.5,
        },
      }}
    />
  );
});

export default Input;
