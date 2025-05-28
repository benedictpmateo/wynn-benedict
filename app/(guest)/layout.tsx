import Header from "@/components/layout/header";
import { MAX_W_CONTAINER } from "@/lib/configs/layout";
import { Box } from "@chakra-ui/react";

export default function GuestLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Box>
      <Header />
      <Box mx="auto" maxW={MAX_W_CONTAINER}>
        {children}
      </Box>
    </Box>
  );
}
