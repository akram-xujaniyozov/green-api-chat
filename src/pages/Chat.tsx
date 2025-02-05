import React from "react";
import { useNavigate, Navigate } from "react-router";
import { useAuthContext } from "../context";

export const Chat: React.FC = () => {
  const { logout, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogoutClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Chat page</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};
