import React from "react";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { CustomAvatar } from "./Avatar";
import { ContactType } from "../types";

export const Contact: React.FC<ContactType> = ({ name, surname, phone }) => {
  return (
    <Box as="div">
      <Card variant="surface" size="1" className="hover:bg-lightGray p-2">
        <Flex gap="3" align="center">
          <CustomAvatar fallback={name[0]} />
          <Box as="div" className="flex flex-col">
            <Text as="p" size="3" weight="medium" className="text-lightGreen">
              {name} {surname}
            </Text>
            <Text
              as="p"
              size="2"
              weight="regular"
              color="gray"
              className="text-[9px]"
            >
              {phone}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};
