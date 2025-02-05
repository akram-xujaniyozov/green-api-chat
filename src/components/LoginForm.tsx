import React, { FormEvent } from "react";
import { useNavigate, Navigate } from "react-router";
import { Box, Button, Heading } from "@radix-ui/themes";
import { TokensIcon, InputIcon } from "@radix-ui/react-icons";

import { useAuthContext } from "../context";
import { Input } from "../ui";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/chat" />;
  }

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
    navigate("/chat");
  };
  return (
    <Box
      as="div"
      width="350px"
      p="5"
      className="border-2 border-green-500 rounded-2xl drop-shadow-md shadow shadow-green-300"
    >
      <Heading as="h1" size="3" align="center" weight="medium" color="green">
        GREEN-API Chat App
      </Heading>
      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 mt-3">
        <Input placeholder="idInstance" icon={<InputIcon />} />
        <Input placeholder="apiTokenInstance" icon={<TokensIcon />} />
        <Button type="submit" variant="solid" color="green">
          Login
        </Button>
      </form>
    </Box>
  );
};
