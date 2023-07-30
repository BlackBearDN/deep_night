import styled from "styled-components";
import colors from "../../../styles/colors";
import indents from "../../../styles/indents";
import borders from "../../../styles/borders";
import transitions from "../../../styles/transitions";

export const MenuActionStyled = styled.div`
  width: calc(100% - ${indents.i32});
  margin: ${indents.i0} ${indents.i8};
  padding: ${indents.i4} ${indents.i8};
  border-radius: ${borders.r1};
  cursor: pointer;
  transition: background ease-in-out ${transitions.t3};

  &:first-child {
    margin: ${indents.i8} ${indents.i8} ${indents.i0} ${indents.i8};
  }

  &:last-child {
    margin: ${indents.i0} ${indents.i8} ${indents.i8} ${indents.i8};
  }

  &:hover {
    background: ${colors.black.d6};
  }
`;
