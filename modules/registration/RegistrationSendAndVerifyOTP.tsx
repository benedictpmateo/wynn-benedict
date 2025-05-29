import { Box, Button, Flex, RadioCard, Text } from "@chakra-ui/react";
import FormGroupTitle from "@/components/Form/FormGroupTitle";
import { sendCodeOptions } from "./registration.const";

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
        <FormGroupTitle title="OTP Verification" />

        <Box mt="32px" bg="white" rounded="4px" p="24px">
          <Box textAlign="center" mb="20px">
            <Text
              fontFamily="heading"
              fontSize="20px"
              lineHeight="28px"
              mb="16px"
            >
              Send Code
            </Text>
            <Text
              fontSize="16px"
              lineHeight="20px"
              color="var(--color-text-100)"
            >
              How would you like to receive the code?
            </Text>
          </Box>
          <Flex>
            <RadioCard.Root w="full">
              <Flex justify="center" gap="20px">
                {sendCodeOptions.map(({ value, label }) => (
                  <RadioCard.Item
                    key={value}
                    value={value}
                    p="12px"
                    flex="unset"
                    border={0}
                    outline={0}
                    boxShadow="none"
                  >
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl py="12px">
                      <RadioCard.ItemIndicator
                        colorPalette="brandGreen"
                        color="brandGreen.solid"
                        borderColor="var(--color-border-dark)"
                      />
                      <RadioCard.ItemText
                        fontSize="16px"
                        lineHeight="20px"
                        letterSpacing="0.5px"
                      >
                        {label}
                      </RadioCard.ItemText>
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </Flex>
            </RadioCard.Root>
          </Flex>
        </Box>
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
