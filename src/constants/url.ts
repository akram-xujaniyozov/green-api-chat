import { getDataStorage } from "../utils/dataStorage";

export const baseURL = "https://7105.api.greenapi.com";

const idInstance = getDataStorage("id");
const apiTokenInstance = getDataStorage("token");

export const urls = {
  getMessages: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
  sendMessage: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
  deleteMessage: (id: number) =>
    `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`,
};
