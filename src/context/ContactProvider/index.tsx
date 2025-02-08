import React, { useState, createContext, useContext } from "react";

import { ContactProviderProps, ContactContextType } from "./type";
import { ContactType } from "../../types";

export const ContactContext = createContext({} as ContactContextType);

export const ContactProvider: React.FC<ContactProviderProps> = ({
  children,
}) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  const addNewContact = (contact: ContactType) => {
    setContacts((prev) => [...prev, contact]);
  };

  return (
    <ContactContext.Provider value={{ contacts, addNewContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
