import styled from "styled-components";
import borders from "../../../styles/borders";
import shadows from "../../../styles/shadows";
import transitions from "../../../styles/transitions";
import indents from "../../../styles/indents";

export default styled.button<{
  $appearance: string;
  $hasChildren: boolean;
  $shadow: boolean;
  $hasIcon: boolean;
}>`
  min-width: 42px;
  padding: ${indents.i12} ${indents.i8};
  background: none;
  border: none;
  border-radius: ${borders.r3};
  box-shadow: ${(props): string => (props.$shadow ? shadows.b2 : "none")};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: "Gantari", sans-serif;
  display: flex;
  align-items: center;
  justify-content: ${(props): string => (props.$hasIcon ? "left" : "center")};
  cursor: pointer;
  transition: ease-in-out ${transitions.t3};

  svg {
    padding: ${(props): string =>
      props.$hasChildren
        ? `${indents.i0} ${indents.i0} ${indents.i0} ${indents.i12}`
        : `${indents.i0} ${indents.i8}`};

    path {
      transition: easy-in-out ${transitions.t3};
    }
  }

  ${(props): string => props.$appearance ?? ""}
`;
