import React, { ReactNode } from "react";
import { TextField } from "@radix-ui/themes";

type InputProps = {
  placeholder: string;
  icon?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  icon,
}) => {
  return (
    <TextField.Root
      onChange={onChange}
      placeholder={placeholder}
      radius="large"
      variant="surface"
      color="green"
      size="1"
    >
      <TextField.Slot side="left" px="2" color="green">
        {icon}
      </TextField.Slot>
    </TextField.Root>
  );
};
