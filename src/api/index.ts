import { AxiosError } from "axios";
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";
import { Api } from "./axios";
import { RecieveMessageType } from "../types";
import { urls } from "../constants/url";

const useGetMessages = <T extends RecieveMessageType>(
  key: string,
  url: string,
  idInstance: string,
  apiTokensInstance: string
): UseQueryResult<T, AxiosError<Error>> => {
  const getMessages = async (): Promise<T> => {
    const data: T = await Api.get(url);

    await Api.delete(urls.deleteMessage(data.receiptId));

    return data;
  };
  return useQuery({
    queryKey: [key],
    queryFn: getMessages,
    enabled: !!idInstance && !!apiTokensInstance,
    refetchInterval: 5000,
  });
};

const useSendMessage = <T, U>(
  url: string
): UseMutationResult<T, AxiosError<Error>, U> => {
  const sendMessage = async (body: U): Promise<T> => {
    const response: T = await Api.post(url, body);
    return response;
  };
  return useMutation({ mutationFn: sendMessage });
};

export { useGetMessages, useSendMessage };
