import styled from "styled-components";
import indents from "../../../styles/indents";
import colors from "../../../styles/colors";
import borders from "../../../styles/borders";
import Image from "../../Image/Image";
import shadows from "../../../styles/shadows.ts";
import transitions from "../../../styles/transitions.ts";

export const CardStyled = styled.div<{
  $bordered?: boolean;
  $shadow?: boolean;
  $clicked?: boolean;
}>`
  position: relative;
  max-width: 316px;
  border: ${(props): string => (props.$bordered ? `1px solid ${colors.black.d6}` : "none")};
  border-radius: ${borders.r3};
  box-shadow: ${(props): string => (props.$shadow ? shadows.b2 : "none")};
  transition: ease-in-out ${transitions.t3};
  cursor: ${(props): string => (props.$clicked ? "pointer" : "auto")};

  &:hover {
    transform: ${(props): string => (props.$clicked ? `translateY(-${indents.i4})` : "none")};
    box-shadow: ${(props): string => (props.$clicked || props.$shadow ? shadows.b2 : "none")};
  }
`;

export const CardTitle = styled.div`
  width: calc(100% - ${indents.i24});
  padding: ${indents.i16} ${indents.i12} ${indents.i4} ${indents.i12};

  h3 {
    margin: 0;
  }
`;

export const CardImage = styled(Image)<{ $isClear: boolean }>`
  width: ${(props): string => (props.$isClear ? "133px" : "100%")};
  border-radius: ${borders.r3};
`;

export const CardContent = styled.div`
  width: calc(100% - ${indents.i24});
  padding: ${indents.i16} ${indents.i12};
`;

export const CardMenuActions = styled.div`
  position: absolute;
  top: ${indents.i8};
  right: ${indents.i8};
`;
