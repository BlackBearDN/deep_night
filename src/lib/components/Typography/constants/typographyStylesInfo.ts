import ITypographyStylesInfo from "../interfaces/ITypographyStylesInfo";
import TypographyType from "../types/TTypographyType";
import indents from "../../../styles/indents";

export default {
  span: {
    fontSize: "14px",
    fontWeight: "400",
    padding: `${indents.i0}`,
  },
  p: {
    fontSize: "14px",
    fontWeight: "400",
    padding: `${indents.i16} ${indents.i0}`,
  },
  h1: {
    fontSize: "48px",
    fontWeight: "700",
    padding: `${indents.i16} ${indents.i0}`,
  },
  h2: {
    fontSize: "32px",
    fontWeight: "700",
    padding: `${indents.i16} ${indents.i0}`,
  },
  h3: {
    fontSize: "18px",
    fontWeight: "700",
    padding: `${indents.i16} ${indents.i0}`,
  },
  h4: {
    fontSize: "14px",
    fontWeight: "700",
    padding: `${indents.i16} ${indents.i0}`,
  },
  h5: {
    fontSize: "12px",
    fontWeight: "700",
    padding: `${indents.i16} ${indents.i0}`,
  },
  h6: {
    fontSize: "8px",
    fontWeight: "700",
    padding: `${indents.i16} ${indents.i0}`,
  },
} as Record<TypographyType, ITypographyStylesInfo>;
