import React from "react";
import { useNavigate, Navigate } from "react-router";
import { Box, Flex, Text } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { useAuthContext, useContactContext } from "../context";
import { clearStorage } from "../utils/dataStorage";

import { ContactAdd, ContactList, Navbar, Messages } from "../components";
import { Input } from "../ui";

export const Chat: React.FC = () => {
  const { logout, isAuthenticated } = useAuthContext();
  const { contacts } = useContactContext();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate("/login");
    clearStorage();
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Flex
      width="70%"
      align="stretch"
      className="mx-auto mt-4 border-2 border-green-500 rounded-2xl drop-shadow-md shadow shadow-green-300 "
    >
      <Box as="div" className="basis-2/6 border-r-[1px] border-gray-200">
        <ContactAdd />
        <Box as="div" px="3" py="2">
          <Input
            placeholder="Search contact"
            size="2"
            icon={<MagnifyingGlassIcon />}
          />
        </Box>
        <ContactList />
      </Box>
      {contacts.length === 0 ? (
        <Text
          as="p"
          className="h-[770px] w-full flex justify-center items-center"
        >
          There is no any chat yet!
        </Text>
      ) : (
        <Flex as="div" direction="column" height="100%" className="basis-4/6">
          <Navbar />
          <Messages />
        </Flex>
      )}
    </Flex>
  );
};
