import React, { useEffect } from "react";
import { Flex, Box } from "@radix-ui/themes";

import { useGetMessages } from "../api";
import { RecieveMessageType } from "../types";
import { getDataStorage } from "../utils/dataStorage";
import { useMessagesContext } from "../context";
import { urls } from "../constants/url";

import { SendMessage } from "./SendMessage";
import { Message } from "../ui";

const idInstance = getDataStorage("id");
const tokenInstance = getDataStorage("token");

export const Messages: React.FC = () => {
  const { messages, setNewMessages } = useMessagesContext();
  const { data } = useGetMessages<RecieveMessageType>(
    "TEXT_MESSAGES",
    urls.getMessages,
    idInstance,
    tokenInstance
  );

  useEffect(() => {
    if (data && data.body.messageData) {
      setNewMessages({
        text: data.body.messageData.textMessageData.textMessage,
        sender: "them",
      });
    }
  }, [data]);

  return (
    <Flex as="div" direction="column" justify="between" flexGrow="1">
      <Box
        as="div"
        px="3"
        pt="3"
        className="overflow-y-auto h-[650px] flex flex-col gap-3 justify-end"
      >
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </Box>
      <SendMessage />
    </Flex>
  );
};
