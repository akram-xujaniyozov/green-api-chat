import React, { useEffect, useRef } from "react";
import { Flex, Box } from "@radix-ui/themes";

import { useGetMessages } from "../api";
import { RecieveMessageType } from "../types";
import { useMessagesContext } from "../context";
import { urls } from "../constants/url";
import { getDataStorage } from "../utils/dataStorage";

import { SendMessage } from "./SendMessage";
import { Message } from "../ui";

export const Messages: React.FC = () => {
  const idInstance = getDataStorage("id");
  const apiTokensInstance = getDataStorage("token");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { messages, setNewMessages } = useMessagesContext();
  const { data } = useGetMessages<RecieveMessageType>(
    "TEXT_MESSAGES",
    urls.getMessages(idInstance, apiTokensInstance),
    idInstance,
    apiTokensInstance
  );

  useEffect(() => {
    if (data && data.body.messageData) {
      setNewMessages({
        text: data.body.messageData.textMessageData.textMessage,
        sender: "them",
      });
    }
  }, [data]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Flex as="div" direction="column" justify="between" flexGrow="1">
      <Box
        as="div"
        px="3"
        pt="3"
        className="overflow-y-auto bg-white h-[650px] flex flex-col"
      >
        <div className="flex-grow"></div>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <SendMessage />
    </Flex>
  );
};
