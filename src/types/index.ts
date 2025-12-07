export interface FormData {
  personaInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  preferences: {
    newsletter: boolean;
    notifications: boolean;
    theme: "light" | "dark";
  };
  addressInfo: {
    street: string;
    city: string;
    zip: string;
  };
}

export interface FormAction {
  type:
    | "UPDATE_PERSONAL_INFO"
    | "UPDATE_PREFERENCES"
    | "UPDATE_ADDRESS_INFO"
    | "RESET_FORM";
  payload:
    | Partial<FormData["personaInfo"]>
    | Partial<FormData["preferences"]>
    | Partial<FormData["addressInfo"]>;
}
