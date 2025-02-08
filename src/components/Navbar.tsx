import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { CustomAvatar } from "../ui";
import { useContactContext } from "../context";

export const Navbar: React.FC = () => {
  const { contacts } = useContactContext();
  return (
    <Flex as="div" p="3" align="center" gap="3" className="border-b-[1px]">
      <CustomAvatar fallback="D" />
      <Flex direction="column">
        <Text as="p" size="3">
          {contacts[0].name} {contacts[0].surname}
        </Text>
        <Flex as="div" align="center" gap="1">
          <Box
            as="span"
            className="w-2.5 h-2.5 rounded-full bg-lightGreen"
          ></Box>
          <Text as="span" size="1">
            Online
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
