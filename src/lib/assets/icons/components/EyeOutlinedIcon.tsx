import React from "react";
import { ReactComponent as Icon } from "../files/eye-outlined.svg";

const EyeOutlinedIcon: React.FC<React.HTMLAttributes<SVGElement>> = ({ ...attrs }) => {
  return <Icon {...attrs} />;
};

export default EyeOutlinedIcon;
