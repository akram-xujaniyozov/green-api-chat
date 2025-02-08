import React, { ReactNode } from "react";
import { TextField } from "@radix-ui/themes";

type InputProps = TextField.RootProps &
  TextField.SlotProps & {
    icon?: ReactNode;
    onClick?: () => void;
  };

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  type,
  icon,
  radius,
  onChange,
  size,
  onClick,
  side = "left",
}) => {
  return (
    <TextField.Root
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      radius={radius}
      variant="surface"
      color="green"
      size={size}
      className="text-gray-500"
    >
      <TextField.Slot
        side={side}
        px="2"
        color="green"
        onClick={onClick}
        className="hover:cursor-pointer"
      >
        {icon}
      </TextField.Slot>
    </TextField.Root>
  );
};
