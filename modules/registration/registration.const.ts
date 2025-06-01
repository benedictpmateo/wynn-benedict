import {
  FieldComponentTypeEnum,
  FieldOptionDictionaryEnum,
  FieldValidationPatternEnum,
  FormBlockType,
  FormFieldType,
} from "@/lib/configs/form-types";

const personalInfoFields: FormFieldType[] = [
  {
    name: "firstName",
    label: "registrationFields.firstName.label",
    mandatory: true,
    tooltip: "registrationFields.firstName.tooltip",
    placeholder: "registrationFields.firstName.placeholder",
    componentType: FieldComponentTypeEnum.InputText,
    validationPattern: FieldValidationPatternEnum.Default,
    columnSpan: 1,
  },
  {
    name: "lastName",
    label: "registrationFields.lastName.label",
    mandatory: true,
    tooltip: "registrationFields.lastName.tooltip",
    placeholder: "registrationFields.lastName.placeholder",
    componentType: FieldComponentTypeEnum.InputText,
    validationPattern: FieldValidationPatternEnum.Default,
    columnSpan: 1,
  },
  {
    name: "gender",
    label: "registrationFields.gender.label",
    mandatory: true,
    tooltip: "registrationFields.gender.tooltip",
    placeholder: "registrationFields.gender.placeholder",
    componentType: FieldComponentTypeEnum.InputSelect,
    validationPattern: FieldValidationPatternEnum.Default,
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
    ],
  },
  {
    name: "residenceCountry",
    label: "registrationFields.residenceCountry.label",
    mandatory: true,
    tooltip: "registrationFields.residenceCountry.tooltip",
    placeholder: "registrationFields.residenceCountry.placeholder",
    componentType: FieldComponentTypeEnum.InputSelect,
    validationPattern: FieldValidationPatternEnum.Default,
    optionsDictionary: FieldOptionDictionaryEnum.CountryList,
  },
];

const contactDetailsFields: FormFieldType[] = [
  {
    name: "email",
    label: "registrationFields.email.label",
    mandatory: true,
    tooltip: "registrationFields.email.tooltip",
    placeholder: "registrationFields.email.placeholder",
    componentType: FieldComponentTypeEnum.InputText,
    validationPattern: FieldValidationPatternEnum.Email,
  },
  {
    name: "phone",
    label: "registrationFields.phone.label",
    mandatory: true,
    tooltip: "registrationFields.phone.tooltip",
    placeholder: "registrationFields.phone.placeholder",
    componentType: FieldComponentTypeEnum.InputPhone,
    validationPattern: FieldValidationPatternEnum.Phone,
  },
];

/**
 * @description only used in RegistrationPersonalInfo.tsx
 */
export const registrationFormBlocks: FormBlockType[] = [
  {
    label: "registration.personalInfo",
    fields: personalInfoFields,
  },
  {
    label: "registration.contactDetails",
    fields: contactDetailsFields,
  },
];

export const sendCodeOptions = [
  {
    value: "phone",
    label: "registrationFields.sendToPhone",
  },
  {
    value: "email",
    label: "registrationFields.sendToEmail",
  },
];
