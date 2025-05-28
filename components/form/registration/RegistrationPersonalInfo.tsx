import { Box, Button } from "@chakra-ui/react";
import RegistrationFormTitle from "./RegistrationFormTitle";

type RegistrationPersonalInfoProps = {
  onClickNext: () => void;
};

const RegistrationPersonalInfo: React.FC<RegistrationPersonalInfoProps> = ({
  onClickNext,
}) => {
  return (
    <Box>
      <Box mb="40px">
        <RegistrationFormTitle title="Personal Info" />
      </Box>
      <Box>
        <Button
          flex={1}
          type="button"
          onClick={onClickNext}
          minW="217px"
          h="56px"
          fontSize="16px"
          colorPalette="brandGreen"
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationPersonalInfo;
