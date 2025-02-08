import React from "react";
import { Flex, Text } from "@radix-ui/themes";

import { ContactAddModal } from "./ContactAddModal";

export const ContactAdd: React.FC = () => {
  return (
    <Flex
      as="div"
      direction="row"
      justify="between"
      align="center"
      px="3"
      py="2"
      className="border-b-[1px] border-gray-200"
    >
      <Text as="p" size="4" className="text-lightGreen">
        Contacts
      </Text>
      <ContactAddModal />
    </Flex>
  );
};
