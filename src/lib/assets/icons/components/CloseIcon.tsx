import React from "react";
import { ReactComponent as Icon } from "../files/close.svg";

const ArrowIcon: React.FC<React.HTMLAttributes<SVGElement>> = ({ ...attrs }) => {
  return <Icon {...attrs} />;
};

export default ArrowIcon;
