import { Box, Button, Flex } from "@chakra-ui/react";
import RegistrationFormTitle from "./RegistrationFormTitle";

type RegistrationSendAndVerifyOTPProps = {
  onClickBack: () => void;
  onClickNext: () => void;
};

const RegistrationSendAndVerifyOTP: React.FC<
  RegistrationSendAndVerifyOTPProps
> = ({ onClickBack, onClickNext }) => {
  return (
    <Box>
      <Box mb="40px">
        <RegistrationFormTitle title="OTP Verification" />
      </Box>

      <Flex gap="40px">
        <Button
          flex={1}
          type="button"
          onClick={onClickBack}
          variant="outline"
          colorPalette="brandGreen"
          h="56px"
          fontSize="16px"
        >
          BACK
        </Button>
        <Button
          flex={1}
          type="button"
          onClick={onClickNext}
          minW="217px"
          colorPalette="brandGreen"
          h="56px"
          fontSize="16px"
        >
          NEXT
        </Button>
      </Flex>
    </Box>
  );
};

export default RegistrationSendAndVerifyOTP;
