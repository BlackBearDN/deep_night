import styled from "styled-components";
import colors from "../../../styles/colors";
import borders from "../../../styles/borders";
import zIndexes from "../../../styles/zIndexes";

export const DropdownStyled = styled.div<{
  $xPosition: number;
  $yPosition: number;
  $width: number;
}>`
  position: absolute;
  z-index: ${zIndexes.popup};
  min-width: ${(props): string => `${Math.max(100, props.$width)}px`};
  top: ${(props): string => `${props.$yPosition}px`};
  left: ${(props): string => `${props.$xPosition}px`};
  background: ${colors.black.d7};
  border-radius: ${borders.r2};
  border: 1px solid ${colors.black.d6};
`;
