import React, { useState, useContext, createContext } from "react";
import { AuthProviderProps, AuthContextType } from "./type";

import { getDataStorage } from "../../utils/dataStorage";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const isAuth = getDataStorage("authenticate");

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    isAuth !== "" ? true : false
  );
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
