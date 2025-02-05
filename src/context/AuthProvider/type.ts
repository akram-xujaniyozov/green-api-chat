import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};
