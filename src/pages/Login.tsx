import React from "react";
import { Flex } from "@radix-ui/themes";

import { LoginForm } from "../components";

export const Login: React.FC = () => {
  return (
    <Flex as="div" align="center" justify="center" height="100vh" gap="3">
      <LoginForm />
    </Flex>
  );
};
