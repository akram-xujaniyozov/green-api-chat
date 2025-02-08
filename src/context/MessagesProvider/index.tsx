import React, { createContext, useContext, useState } from "react";
import { MessageType, MessageProviderProps, MessageContextType } from "./type";

const MessagesContext = createContext({} as MessageContextType);

export const MessagesProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const setNewMessages = (message: MessageType) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessagesContext.Provider value={{ messages, setNewMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => useContext(MessagesContext);
