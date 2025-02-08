import React from "react";
import { Flex, Text } from "@radix-ui/themes";

import { useContactContext } from "../context";
import { Contact } from "../ui";

export const ContactList: React.FC = () => {
  const { contacts } = useContactContext();

  if (!contacts.length) {
    return (
      <Text as="p" size="3" align="center" color="gray">
        Contacts are not existing yet!
      </Text>
    );
  }

  return (
    <Flex as="div" direction="column" gap="2" px="3" py="2">
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </Flex>
  );
};
