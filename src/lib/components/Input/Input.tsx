import React from "react";
import { InputField, InputIcon, InputStyled } from "./input.styled";

const Input: React.FC<
  {
    icon?: React.ReactNode;
    iconColor?: string;
    iconProps?: React.HTMLAttributes<HTMLDivElement>;
    inputRef?: React.RefObject<HTMLInputElement>;
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ icon, iconColor, iconProps, inputRef, ...attrs }) => {
  return (
    <InputStyled>
      <InputField {...attrs} ref={inputRef} $hasIcon={!!icon} />
      {!!icon && (
        <InputIcon {...iconProps} $iconColor={iconColor}>
          {icon}
        </InputIcon>
      )}
    </InputStyled>
  );
};

export default Input;
