import React from "react";
import { Avatar, AvatarProps } from "@radix-ui/themes";

export const CustomAvatar: React.FC<AvatarProps> = ({ fallback }) => {
  return <Avatar color="green" size="3" radius="medium" fallback={fallback} />;
};
