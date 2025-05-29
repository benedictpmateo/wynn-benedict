import { Box, Flex, Text } from "@chakra-ui/react";

type FormGroupTitleProps = {
  title: string;
};

const FormGroupTitle: React.FC<FormGroupTitleProps> = ({ title }) => {
  return (
    <Flex w="full">
      <Box
        borderBottom="1px solid var(--color-black)"
        color="var(--color-text-900)"
        fontFamily="heading"
        fontSize="22px"
        lineHeight="30px"
        pb="8px"
        pr="24px"
      >
        <Text>{title}</Text>
      </Box>
    </Flex>
  );
};

export default FormGroupTitle;
