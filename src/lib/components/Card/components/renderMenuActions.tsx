import React from "react";
import IMenuAction from "../interfaces/IMenuAction";
import { MenuActionStyled } from "./menuAction.styled";
import Typography from "../../Typography/Typography";

const RenderMenuActions: React.FC<{ menuActions?: IMenuAction[] | React.ReactNode }> = ({
  menuActions,
}) => {
  if (Array.isArray(menuActions)) {
    return (
      <div>
        {menuActions.map((action) => (
          <MenuActionStyled
            onClick={(e: React.MouseEvent): void => {
              e.preventDefault();
              action.handler();
            }}
            key={action.label}
          >
            <Typography type="span">{action.label}</Typography>
          </MenuActionStyled>
        ))}
      </div>
    );
  }

  return <>{menuActions}</>;
};

export default RenderMenuActions;
