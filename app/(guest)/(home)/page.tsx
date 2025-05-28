import RegistrationForm from "@/components/form/registration";
import { Box } from "@chakra-ui/react";

export default function Homepage() {
  return (
    <Box mx="auto" maxW="630px" py="60px">
      <RegistrationForm />
    </Box>
  );
}
