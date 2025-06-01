import React, { createContext, useContext, useState } from "react";
import { z } from "zod";
import { registrationSchema } from "./registration.schema";

export type RegistrationFormData = z.infer<typeof registrationSchema>;

export const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  phone: "",
  residenceCountry: "",
  termsAndCondition: false,
};

type RegistrationFormContextType = {
  currentForm: RegistrationFormData;
  setCurrentForm: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
};

const RegistrationFormContext = createContext<
  RegistrationFormContextType | undefined
>(undefined);

export const RegistrationFormProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentForm, setCurrentForm] =
    useState<RegistrationFormData>(initialValues);

  return (
    <RegistrationFormContext.Provider value={{ currentForm, setCurrentForm }}>
      {children}
    </RegistrationFormContext.Provider>
  );
};

// Custom hook for easy access
export const useRegistrationForm = () => {
  const context = useContext(RegistrationFormContext);
  if (!context) {
    throw new Error(
      "useRegistrationForm must be used within a RegistrationFormProvider"
    );
  }
  return context;
};
