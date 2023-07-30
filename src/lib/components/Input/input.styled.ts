import styled from "styled-components";
import colors from "../../styles/colors";
import borders from "../../styles/borders";
import indents from "../../styles/indents";

export const InputStyled = styled.div`
  position: relative;
  width: fit-content;
`;

export const InputField = styled.input<{ $hasIcon: boolean }>`
  outline: none;
  background: ${colors.white.d2};
  border: none;
  border-radius: ${borders.r2};
  color: ${colors.white.d8};
  padding: ${indents.i12} ${(props): string => (props.$hasIcon ? indents.i32 : indents.i16)}
    ${indents.i12} ${indents.i16};
  font-family: 'Gantari', sans-serif;
  font-size: 18px;
  font-weight: 300;
  &::placeholder {
    color: ${colors.white.d7};
  }
`;

export const InputIcon = styled.div<{ $iconColor?: string }>`
  position: absolute;
  width: ${indents.i16};
  height: ${indents.i16};
  right: ${indents.i12};
  top: ${indents.i16};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  svg {
    path {
      fill: ${(props): string => props.$iconColor || colors.purple.d1} !important;
    }
  }
`;
