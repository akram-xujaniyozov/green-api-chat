import React, { useState, ChangeEvent } from "react";
import { Box } from "@radix-ui/themes";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useSendMessage } from "../api";
import { SendMessagePayloadType, SendMessageResponseType } from "../types";
import { useContactContext, useMessagesContext } from "../context";

import { urls } from "../constants/url";

import { Input } from "../ui";

export const SendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const { contacts } = useContactContext();
  const { setNewMessages } = useMessagesContext();
  const { mutate } = useSendMessage<
    SendMessageResponseType,
    SendMessagePayloadType
  >(urls.sendMessage);

  const handleClick = () => {
    if (!message.trim()) return;
    mutate(
      { chatId: `${contacts[0].phone}@c.us`, message },
      {
        onSuccess: () => {
          console.log("Sended message!!!");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
    setNewMessages({ text: message, sender: "me" });
    setMessage("");
  };

  return (
    <Box as="div" p="3">
      <Input
        value={message}
        side="right"
        icon={<PaperPlaneIcon />}
        onClick={handleClick}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setMessage(event.target.value)
        }
      />
    </Box>
  );
};
