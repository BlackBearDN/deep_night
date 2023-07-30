import styled from "styled-components";
import colors from "../../styles/colors";
import transitions from "../../styles/transitions";
import zIndexes from "../../styles/zIndexes";
import borders from "../../styles/borders";

export const ModalStyled = styled.div`
  position: fixed;
  z-index: ${zIndexes.modal};
  width: 100%;
  height: 100vh;
  background-color: ${colors.transparent.t75};
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  outline: none;
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: ${borders.r3};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-in-out ${transitions.t3};

  svg {
    path {
      fill: ${colors.white.d1};
      transition: fill ease-in-out ${transitions.t3};
    }
  }

  &:hover {
    background: ${colors.transparent.t75};
    svg {
      path {
        fill: ${colors.white.d2};
      }
    }
  }
`;
