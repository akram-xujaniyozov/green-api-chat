import React, { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate, Navigate } from "react-router";
import { Box, Button, Heading } from "@radix-ui/themes";
import { TokensIcon, InputIcon } from "@radix-ui/react-icons";

import { useAuthContext } from "../context";
import { setDataStorage } from "../utils/dataStorage";

import { Input } from "../ui";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuthContext();
  const [userId, setUserId] = useState<string>("");
  const [userToken, setUserToken] = useState<string>("");

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId.trim() || !userToken.trim()) return;

    login();
    navigate("/chat");
    setDataStorage("id", userId);
    setDataStorage("token", userToken);
    setDataStorage("authenticate", "isAuth");
  };

  if (isAuthenticated) {
    return <Navigate to="/chat" />;
  }

  return (
    <Box
      as="div"
      width="500px"
      p="5"
      className="border-2 border-green-500 rounded-2xl drop-shadow-md shadow shadow-green-300"
    >
      <Heading as="h1" size="3" align="center" weight="medium" color="green">
        GREEN-API Chat App
      </Heading>
      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 mt-3">
        <Input
          placeholder="idInstance"
          icon={<InputIcon />}
          size="3"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserId(event.target.value)
          }
        />
        <Input
          placeholder="apiTokenInstance"
          icon={<TokensIcon />}
          size="3"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserToken(event.target.value)
          }
        />
        <Button type="submit" variant="solid" color="green">
          Login
        </Button>
      </form>
    </Box>
  );
};
