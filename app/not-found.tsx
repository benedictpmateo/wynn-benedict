import CTAJoinNewsletter from "@/components/layout/cta-join-newsletter";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
  return (
    <Box>
      <Header />
      <Box mx="auto" maxW={MAX_W_CONTAINER} minH={400}>
        <Flex direction="column" gap="4" py="40px" align="center">
          <Text fontFamily="heading" fontSize="40px">
            Page not found
          </Text>
          <Link href="/">Click here to go back to Home </Link>
        </Flex>
      </Box>
      <CTAJoinNewsletter />
      <Footer />
    </Box>
  );
}
