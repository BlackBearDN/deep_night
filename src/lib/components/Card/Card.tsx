import React from "react";
import {
  CardContent,
  CardImage,
  CardMenuActions,
  CardStyled,
  CardTitle,
} from "./styles/Card.styled";
import ICardProps from "./interfaces/ICardProps";
import Typography from "../Typography/Typography";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Card: React.FC<ICardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  title,
  bordered,
  shadow,
  clicked,
  children,
  image,
  menuActions,
  ...attrs
}) => {
  return (
    <CardStyled {...attrs} $bordered={bordered} $shadow={shadow} $clicked={clicked}>
      {image && <CardImage $isClear={!image} src={image} />}
      {title && (
        <CardTitle>
          <Typography type="h3">{title}</Typography>
        </CardTitle>
      )}
      {children && <CardContent>{children}</CardContent>}
      {menuActions && (
        <CardMenuActions>
          <DropdownMenu menuActions={menuActions} />
        </CardMenuActions>
      )}
    </CardStyled>
  );
};

export default Card;
