import styled from "styled-components";
import TTypographyType from "../types/TTypographyType";
import typographyStylesInfo from "../constants/typographyStylesInfo";
import colors from "../../../styles/colors";

export const TypographyStyled = styled.span<{ as: TTypographyType }>`
  font-family: 'Gantari', sans-serif;
  font-weight: ${(props): string => typographyStylesInfo[props.as as TTypographyType].fontWeight};
  font-size: ${(props): string => typographyStylesInfo[props.as as TTypographyType].fontSize};
  color: ${colors.black.d9};
`;
