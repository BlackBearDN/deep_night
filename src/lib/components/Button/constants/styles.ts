import TAppearance from "../types/TAppearance";
import colors from "../../../styles/colors";
import shadows from "../../../styles/shadows";
import borders from "../../../styles/borders";
import transitions from "../../../styles/transitions";
import indents from "../../../styles/indents";

export default {
  appearance: {
    primary: `
      border: 1px solid ${colors.purple.d1};
      background-color: ${colors.purple.d1};
      color: ${colors.white.d1};
      
      svg {
        path {
          fill: ${colors.white.d1};
        }
      }
      
      &:hover {
        background-color: ${colors.purple.d2};
      }
    `,
    outlined: `
      border: 1px solid ${colors.purple.d1};
      background-color: ${colors.transparent.t100};
      color: ${colors.purple.d1};
      
      svg {
        path {
          fill: ${colors.purple.d1};
        }
      }
      
      &:hover {
        background-color: ${colors.purple.d1};
        color: ${colors.white.d1};
        
        svg {
          path {
            fill: ${colors.white.d1};
          }
        }
      }
    `,
    filled: `
      border: 1px solid ${colors.white.d1};
      background-color: ${colors.white.d1};
      color: ${colors.purple.d1};
      box-shadow: ${shadows.sh1};
      
      svg {
        path {
          fill: ${colors.purple.d1};
        }
      }
      
      &:hover {
        box-shadow: none;
      }
    `,
    icon: `
      border: none;
      background-color: none;
      color: ${colors.purple.d1};
      
      svg {
        path {
          fill: ${colors.purple.d1};
        }
      }
      
      &:hover {
        color: ${colors.purple.d2};
        
        svg {
          path {
            fill: ${colors.purple.d2};
          }
        }
      }
    `,
    backgroundIcon: `
      min-width: 40px;
      height: 40px;
      background: ${colors.white.d2};
      border-radius: ${borders.r2};
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        width: 100%;
        padding: ${indents.i0};
        path {
          transition: ease-in-out ${transitions.t3};
        }
      }
      
      &:hover {
        color: ${colors.purple.d2};
        
        svg {
          path {
            fill: ${colors.purple.d2};
          }
        }
      }
    `,
  },
} as {
  appearance: Record<TAppearance, string>;
};
