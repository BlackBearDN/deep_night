import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.black.d8};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Gantari', sans-serif;
    
    *::-webkit-scrollbar {
      width: 4px;
      background: ${colors.white.d1};
      border-radius: 5px;
    }
    *::-webkit-scrollbar-thumb {
      background: ${colors.white.d4};
      border-radius: 5px;
    }
    scrollbar-track-color: ${colors.white.d4};
  }
  
  svg {
    font-size: 21px;
  }
`;
