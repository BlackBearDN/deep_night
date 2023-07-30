import React from "react";
import IMenuAction from "./IMenuAction";

export default interface ICardProps {
  title?: string;
  bordered?: boolean;
  shadow?: boolean;
  clicked?: boolean;
  children?: React.ReactNode;
  image?: string | null;
  menuActions?: IMenuAction[] | React.ReactNode;
}
