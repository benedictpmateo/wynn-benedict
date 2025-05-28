import { Box, Flex, Text } from "@chakra-ui/react";

type RegistrationFormTitleProps = {
  title: string;
};

const RegistrationFormTitle: React.FC<RegistrationFormTitleProps> = ({
  title,
}) => {
  return (
    <Flex w="full">
      <Box
        borderBottom="1px solid var(--color-black)"
        pb="8px"
        fontFamily="heading"
        fontSize="22px"
        lineHeight="30px"
        pr="24px"
      >
        <Text>{title}</Text>
      </Box>
    </Flex>
  );
};

export default RegistrationFormTitle;
