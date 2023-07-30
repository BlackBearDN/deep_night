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
import pictureIcon from "../../assets/icons/files/picture-icon.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Card: React.FC<ICardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  title,
  bordered,
  children,
  image,
  menuActions,
  ...attrs
}) => {
  return (
    <CardStyled {...attrs} $bordered={bordered}>
      {title && (
        <CardTitle>
          <Typography type="h3">{title}</Typography>
        </CardTitle>
      )}
      {image && (
        <CardImage $isClear={image === "clear"} src={image === "clear" ? pictureIcon : image} />
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
