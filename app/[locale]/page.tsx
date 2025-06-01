import RegistrationForm from "@/modules/registration";
import { Box } from "@chakra-ui/react";

export default function RegistrationPage() {
  return (
    <Box mx="auto" maxW="630px" py="60px">
      <RegistrationForm />
    </Box>
  );
}
