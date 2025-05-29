import { FormBlockType } from "@/lib/configs/form-types";
import { Grid, GridItem } from "@chakra-ui/react";
import FormGroupTitle from "./FormGroupTitle";
import FormField from "./FormField";
import { Control, FieldValues } from "react-hook-form";

type FormProps = {
  blocks: FormBlockType[];
  control: Control<FieldValues>;
};

const Form: React.FC<FormProps> = ({ blocks, control }) => {
  return (
    <Grid gap="32px">
      {/* Render blocks */}
      {blocks.map((block, i) => (
        <GridItem key={`block-${i}`}>
          <FormGroupTitle title={block.label} />

          <Grid templateColumns="repeat(2, 1fr)" gap="24px" mt="20px">
            {/* Render fields */}
            {block.fields.map((field, j) => (
              <GridItem
                key={`block-${i}-field-${j}`}
                colSpan={field?.columnSpan || 2}
              >
                <FormField field={field} control={control} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Form;
