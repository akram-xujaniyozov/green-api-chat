import { ReactNode } from "react";
import { ContactType } from "../../types";

export interface ContactProviderProps {
  children: ReactNode;
}

export type ContactContextType = {
  contacts: ContactType[];
  addNewContact: (contact: ContactType) => void;
};
