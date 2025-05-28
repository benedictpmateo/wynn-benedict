import CTAJoinNewsletter from "@/components/layout/cta-join-newsletter";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import { Box } from "@chakra-ui/react";

export default function GuestLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Box>
      <Header />
      <Box mx="auto" maxW={MAX_W_CONTAINER} minH={400}>
        {children}
      </Box>
      <CTAJoinNewsletter />
      <Footer />
    </Box>
  );
}
