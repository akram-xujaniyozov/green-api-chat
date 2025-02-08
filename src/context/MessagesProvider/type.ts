import { ReactNode } from "react";

export type MessageType = {
  text: string;
  sender: string;
};

export type MessageContextType = {
  messages: MessageType[];
  setNewMessages: (message: MessageType) => void;
};

export interface MessageProviderProps {
  children: ReactNode;
}
