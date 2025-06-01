import { FormBlockType } from "@/lib/configs/form-types";
import { Grid, GridItem } from "@chakra-ui/react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import FormField from "./FormField";
import FormGroupTitle from "./FormGroupTitle";

type FormProps<T> = {
  blocks: FormBlockType[];
  form: UseFormReturn<FieldValues & T>;
};

function Form<T>({ blocks, form }: FormProps<T>) {
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
                colSpan={{ base: 2, md: field?.columnSpan || 2 }}
              >
                <FormField<T> field={field} form={form} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      ))}
    </Grid>
  );
}

export default Form;
