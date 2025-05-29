import {
  FieldComponentTypeEnum,
  FieldOptionDictionaryEnum,
  FormFieldType,
  FieldValidationPatternEnum,
  FormBlockType,
} from "@/lib/configs/form-types";

const personalInfoFields: FormFieldType[] = [
  {
    name: "firstName",
    label: "First Name",
    mandatory: true,
    tooltip: "Input your first name",
    placeholder: "Input your first name",
    componentType: FieldComponentTypeEnum.TextInput,
    validationPattern: FieldValidationPatternEnum.Default,
    columnSpan: 1,
  },
  {
    name: "lastName",
    label: "Last Name",
    mandatory: true,
    tooltip: "Input your last name",
    placeholder: "Input your last name",
    componentType: FieldComponentTypeEnum.TextInput,
    validationPattern: FieldValidationPatternEnum.Default,
    columnSpan: 1,
  },
  {
    name: "gender",
    label: "Gender",
    mandatory: true,
    tooltip: "Select your gender",
    placeholder: "Select your gender",
    componentType: FieldComponentTypeEnum.SelectInput,
    validationPattern: FieldValidationPatternEnum.Default,
    options: ["Male", "Female"],
  },
  {
    name: "residenceCountry",
    label: "Your residence country",
    mandatory: true,
    tooltip: "Select your residence country",
    placeholder: "Select your residence country",
    componentType: FieldComponentTypeEnum.SelectInput,
    validationPattern: FieldValidationPatternEnum.Default,
    optionsDictioanry: FieldOptionDictionaryEnum.CountryList,
  },
];

const contactDetailsFields: FormFieldType[] = [
  {
    name: "email",
    label: "Email",
    mandatory: true,
    tooltip: "Please input your valid email address",
    placeholder: "Input your email address",
    componentType: FieldComponentTypeEnum.TextInput,
    validationPattern: FieldValidationPatternEnum.Email,
  },
  {
    name: "phone",
    label: "Phone Number",
    mandatory: true,
    tooltip: "Please input your valid phone number",
    placeholder: "Input your phone number",
    componentType: FieldComponentTypeEnum.PhoneInput,
    validationPattern: FieldValidationPatternEnum.Phone,
  },
];

/**
 * @description only used in RegistrationPersonalInfo.tsx
 */
export const registrationFormBlocks: FormBlockType[] = [
  {
    label: "Personal Info",
    fields: personalInfoFields,
  },
  {
    label: "Contact Details",
    fields: contactDetailsFields,
  },
];

export const sendCodeOptions = [
  {
    value: "phone",
    label: "Send to Phone",
  },
  {
    value: "email",
    label: "Send to Email",
  },
];
