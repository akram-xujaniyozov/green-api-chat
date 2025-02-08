export interface ContactType {
  name: string;
  surname: string;
  phone: string;
}

export interface SendMessagePayloadType {
  chatId: string;
  message: string;
}

export interface SendMessageResponseType {
  idMessage: string;
}

export type RecieveMessageType = {
  receiptId: number;
  body: {
    typeWebhook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      chatName: string;
      sender: string;
      senderName: string;
      senderContactName: string;
    };
    messageData: {
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
};
