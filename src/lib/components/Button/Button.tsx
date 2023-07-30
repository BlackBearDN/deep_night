import React from "react";
import TAppearance from "./types/TAppearance";
import ButtonStyled from "./styles/button.styled";
import styles from "./constants/styles";

const Button: React.FC<
  {
    appearance?: TAppearance;
    shadow?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    buttonRef?: React.RefObject<HTMLButtonElement>;
    type?: "submit" | "reset" | "button";
  } & React.HTMLAttributes<HTMLButtonElement>
> = ({
  appearance = "primary",
  shadow = false,
  icon,
  children,
  buttonRef,
  type = "button",
  ...attrs
}) => {
  return (
    <ButtonStyled
      {...attrs}
      type={type}
      ref={buttonRef}
      $hasIcon={!!icon}
      $appearance={styles.appearance[appearance]}
      $shadow={shadow}
      $hasChildren={!!children}
    >
      {children}
      {icon}
    </ButtonStyled>
  );
};

export default Button;
