import React from "react";
import TTypographyType from "./types/TTypographyType";
import { TypographyStyled } from "./styles/typography.styled";

const Typography: React.FC<
  { type?: TTypographyType; children?: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>
> = ({ type = "p", children, ...attrs }) => {
  return (
    <TypographyStyled {...attrs} as={type}>
      {children}
    </TypographyStyled>
  );
};

export default Typography;
