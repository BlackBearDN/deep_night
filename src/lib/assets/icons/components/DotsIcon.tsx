import React from "react";
import { ReactComponent as Icon } from "../files/dots.svg";

const DotsIcon: React.FC<React.HTMLAttributes<SVGElement>> = ({ ...attrs }) => {
  return <Icon {...attrs} />;
};

export default DotsIcon;
