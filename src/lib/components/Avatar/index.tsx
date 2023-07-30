import React from "react";
import { AvatarImage, AvatarStyled, IconAvatar, TextAvatar } from "./styles/Avatar.styled.ts";
import IAvatarProps from "./interfaces/IAvatarProps.ts";
import { AiOutlineUser } from "react-icons/ai";

const Avatar: React.FC<IAvatarProps & React.HTMLAttributes<HTMLDivElement>> = ({
  src,
  text,
  ...attrs
}) => {
  const getContent = (): React.ReactElement => {
    if (src) {
      return <AvatarImage src={src} />;
    }

    if (text) {
      const firstSymbols = text.split(" ");

      if (firstSymbols.length) {
        return (
          <TextAvatar>
            {firstSymbols?.[0][0]}
            {firstSymbols?.[1][0]}
          </TextAvatar>
        );
      }
    }

    return (
      <IconAvatar>
        <AiOutlineUser />
      </IconAvatar>
    );
  };

  return <AvatarStyled {...attrs}>{getContent()}</AvatarStyled>;
};

export default Avatar;
