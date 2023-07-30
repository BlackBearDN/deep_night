import React from "react";
import IMenuAction from "./IMenuAction";

export default interface ICardProps {
  title?: string;
  bordered?: boolean;
  children?: React.ReactNode;
  image?: string | "clear";
  menuActions?: IMenuAction[] | React.ReactNode;
}
