import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
  return (
    <Box>
      <Flex direction="column" gap="4" py="40px" align="center">
        <Text fontFamily="heading" fontSize="40px">
          Page not found
        </Text>
        <Link href="/">Click here to go back to Home </Link>
      </Flex>
    </Box>
  );
}
