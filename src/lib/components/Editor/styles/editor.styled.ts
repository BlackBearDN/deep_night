import styled from "styled-components";
import colors from "../../../styles/colors";
import borders from "../../../styles/borders";

export default styled.div`
  font-family: 'Gantari', sans-serif;
  .jodit-wysiwyg {
    background: ${colors.white.d2};
    border-radius: 0 0 ${borders.r2} ${borders.r2};
  }
  .jodit-toolbar__box {
    background: ${colors.white.d2} !important;
    border: none;
  }
  .jodit-container {
    border: none !important;
  }
  .jodit-add-new-line {
    display: none;
  }
`;
