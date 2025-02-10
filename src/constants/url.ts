const baseURL = "https://7105.api.greenapi.com";

const urls = {
  getMessages: (idInstance: string, apiTokenInstance: string) =>
    `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
  sendMessage: (idInstance: string, apiTokenInstance: string) =>
    `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
  deleteMessage: (id: number, idInstance: string, apiTokenInstance: string) =>
    `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`,
};

export { baseURL, urls };
