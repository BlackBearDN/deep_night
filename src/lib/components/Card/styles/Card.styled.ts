import styled from "styled-components";
import indents from "../../../styles/indents";
import colors from "../../../styles/colors";
import shadows from "../../../styles/shadows";
import borders from "../../../styles/borders";
import Image from "../../Image/Image";

export const CardStyled = styled.div<{ $bordered?: boolean }>`
  position: relative;
  max-width: 316px;
  border: ${(props): string => (props.$bordered ? `1px solid ${colors.white.d6}` : "none")};
  border-radius: ${borders.r3};
`;

export const CardTitle = styled.div`
  width: 100%;
  padding: ${indents.i8} ${indents.i12};
`;

export const CardImage = styled(Image)<{ $isClear: boolean }>`
  width: ${(props): string => (props.$isClear ? "133px" : "100%")};
  border-radius: ${borders.r3};
  box-shadow: ${shadows.sh1};
`;

export const CardContent = styled.div`
  width: 100%;
  padding: ${indents.i16} ${indents.i0};
`;

export const CardMenuActions = styled.div`
  position: absolute;
  top: ${indents.i8};
  right: ${indents.i8};
`;
