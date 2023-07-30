import TAppearance from "../types/TAppearance";
import colors from "../../../styles/colors";
import borders from "../../../styles/borders";
import indents from "../../../styles/indents";

export default {
  appearance: {
    primary: `
      border: 1px solid ${colors.green.d4};
      background-color: ${colors.green.d4};
      color: ${colors.white.d1};
      
      svg {
        path {
          fill: ${colors.green.d4};
        }
      }
      
      &:hover {
        background-color: ${colors.green.d5};
      }
    `,
    outlined: `
      border: 1px solid ${colors.green.d4};
      background-color: ${colors.transparent.t100};
      color: ${colors.green.d4};
      
      svg {
        path {
          fill: ${colors.green.d4};
        }
      }
      
      &:hover {
        background-color: ${colors.green.d4};
        color: ${colors.white.d1};
        
        svg {
          path {
            fill: ${colors.white.d1};
          }
        }
      }
    `,
    filled: `
      border: 1px solid ${colors.black.d6};
      background-color: ${colors.black.d7};
      color: ${colors.green.d4};
      
      svg {
        path {
          fill: ${colors.green.d4};
        }
      }
      
      &:hover {
        color: ${colors.green.d5};
        
        svg {
          path {
            fill: ${colors.green.d5};
          }
        }
      }
    `,
    icon: `
      border: none;
      background-color: none;
      color: ${colors.green.d4};
      
      svg {
        path {
          fill: ${colors.green.d4};
        }
      }
      
      &:hover {
        color: ${colors.green.d5};
        
        svg {
          path {
            fill: ${colors.green.d5};
          }
        }
      }
    `,
    backgroundIcon: `
      min-width: 40px;
      height: 40px;
      background: ${colors.black.d7};
      border-radius: ${borders.r2};
      color: ${colors.green.d4};
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        width: 100%;
        padding: ${indents.i0};
      }
      
      &:hover {
        color: ${colors.green.d5};
        
        svg {
          path {
            fill: ${colors.green.d5};
          }
        }
      }
    `,
  },
} as {
  appearance: Record<TAppearance, string>;
};
