export type FormBlockType = {
  label: string;
  fields: FormFieldType[];
};

export type FormFieldType = {
  name: string;
  label: string;
  placeholder?: string;
  tooltip?: string;
  componentType: FieldComponentTypeEnum;
  validationPattern?: FieldValidationPatternEnum;
  options?: string[];
  /**
   * @description Will override options by using a defined dictionary
   */
  optionsDictioanry?: FieldOptionDictionaryEnum;
  mandatory?: boolean;
  /**
   * @description Default set to 2. Form grid has 2 columns, if columnSpan is 1,
   *              it will only occupy 1 column.
   */
  columnSpan?: 1 | 2;
};

export enum FieldComponentTypeEnum {
  TextInput = "TextInput",
  SelectInput = "SelectInput",
  PhoneInput = "PhoneInput",
}

export enum FieldValidationPatternEnum {
  Default = "Default",
  Email = "Email",
  Phone = "Phone",
}

export enum FieldOptionDictionaryEnum {
  CountryList = "CountryList",
}
