import { createContext, useContext, useReducer } from "react";
import { formReducer, initialFormState } from "../reducers/formReducer";
import type { FormAction, FormData } from "../types";

interface FormContextType {
  state: FormData;
  dispatch: React.Dispatch<FormAction>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormContext must be within a Form Provider");
  }

  return context;
}
