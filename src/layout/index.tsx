import React from "react";
import { Outlet, Navigate } from "react-router";
import { useAuthContext } from "../context";

export const Layout: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
