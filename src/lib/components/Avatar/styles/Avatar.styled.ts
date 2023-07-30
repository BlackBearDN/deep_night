import styled from "styled-components";
import borders from "../../../styles/borders.ts";
import colors from "../../../styles/colors.ts";

export const AvatarStyled = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${borders.r2};
  user-select: none;
`;

export const AvatarImage = styled.img`
  height: 100%;
`;

export const TextAvatar = styled.div<{ $color?: string }>`
  width: 100%;
  height: 100%;
  background: ${(props): string => props.$color || colors.white.d10};
  color: ${colors.white.d2};
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 36px;
    path {
      fill: ${colors.white.d2};
    }
  }
`;
