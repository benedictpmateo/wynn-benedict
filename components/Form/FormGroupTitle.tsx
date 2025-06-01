import { useI18n } from "@/locales/client";
import { Box, Flex, Text } from "@chakra-ui/react";

type FormGroupTitleProps = {
  title: string;
};

const FormGroupTitle: React.FC<FormGroupTitleProps> = ({ title }) => {
  const t = useI18n();
  return (
    <Flex w="full">
      <Box
        css={{
          borderBottom: "1px solid var(--color-black)",
          color: "var(--color-text-900)",
          fontFamily: "heading",
          fontSize: "22px",
          lineHeight: "30px",
          pb: "8px",
          paddingEnd: "24px",
        }}
      >
        <Text>{t(title as never)}</Text>
      </Box>
    </Flex>
  );
};

export default FormGroupTitle;
