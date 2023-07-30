import styled from "styled-components";
import indents from "../../../styles/indents";
import colors from "../../../styles/colors";
import borders from "../../../styles/borders";

export const SelectStyled = styled.div`
  .dropdown {
    border-radius: 0 0 ${borders.r2} ${borders.r2};
  }
  .selectInputIcon {
    transform: rotate(90deg);
  }
  .openSelectInputIcon {
    transform: rotate(-90deg);
  }
`;

export const SelectDropdownContent = styled.div`
  min-height: 28px;
  padding: ${indents.i8};
`;

export const SelectDropdownItem = styled.div`
  width: calc(100% - ${indents.i16});
  padding: ${indents.i4} ${indents.i8};
  border-radius: ${borders.r1};
  font-family: 'Gantari', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: ${colors.white.d2};
  cursor: pointer;
  transition: background-color ease-in-out 0.3s;
  &:hover {
    background-color: ${colors.black.d6};
  }
`;

export const SelectNoContent = styled.p`
  width: 100%;
  margin: 0;
  text-align: center;
  font-family: 'Gantari', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: ${colors.white.d7};
`;
