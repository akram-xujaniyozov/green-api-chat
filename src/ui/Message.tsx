import React from "react";
import { Text, Box } from "@radix-ui/themes";

type MessageProps = {
  text?: string;
  sender?: string;
};

export const Message: React.FC<MessageProps> = ({ text, sender }) => {
  return (
    <Box as="div" className={sender === "me" ? "text-right" : "text-left"}>
      <Text
        as="span"
        className={
          sender === "me"
            ? "inline-block text-sm text-white bg-lightGreen px-2 py-1 rounded-md"
            : "inline-block text-sm text-black bg-lightGray px-2 py-1 rounded-md"
        }
      >
        {text}
      </Text>
    </Box>
  );
};
