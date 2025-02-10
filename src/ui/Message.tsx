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
        as="div"
        className={`inline-block mb-3 text-sm px-2 py-1 rounded-md max-w-80 ${
          sender === "me"
            ? "text-white bg-lightGreen text-right"
            : "text-black bg-lightGray text-left"
        }`}
      >
        {text}
      </Text>
    </Box>
  );
};
