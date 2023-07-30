import styled from "styled-components";
import colors from "../../styles/colors";
import transitions from "../../styles/transitions";

export const ImageStyled = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .bn-previewContainer {
    opacity: 0;
    border-radius: inherit;
    transition: opacity ease-in-out ${transitions.t3};
  }

  &:hover {
    .bn-previewContainer {
      opacity: 100%;
    }
  }
`;

export const ImageFullViewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.transparent.t75};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  * {
    pointer-events: none;
  }

  svg {
    path {
      fill: ${colors.white.d1};
    }
  }

  span {
    color: ${colors.white.d1};
  }
`;

export const ModalImageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  height: 50vw;
`;
