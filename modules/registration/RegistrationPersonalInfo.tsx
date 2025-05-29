import Form from "@/components/Form";
import { Box, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { registrationFormBlocks } from "./registration.const";

type RegistrationPersonalInfoProps = {
  onClickNext: () => void;
};

const RegistrationPersonalInfo: React.FC<RegistrationPersonalInfoProps> = ({
  onClickNext,
}) => {
  const form = useForm();

  const onSubmit = () => {
    //
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Form control={form.control} blocks={registrationFormBlocks} />

      <Box mt="44px">
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
    </form>
  );
};

export default RegistrationPersonalInfo;
