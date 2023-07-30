import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import RenderMenuActions from "../Card/components/renderMenuActions";
import IMenuAction from "../Card/interfaces/IMenuAction";
import { BsThreeDotsVertical } from "react-icons/bs";

const DropdownMenu: React.FC<{ menuActions?: IMenuAction[] | React.ReactNode }> = ({
  menuActions,
}) => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMenuActions, setShowMenuActions] = useState<boolean>(false);

  const changeShowMenuActions = (): void => {
    setShowMenuActions((prev) => !prev);
  };

  return (
    <div>
      {menuActions && (
        <div ref={dropdownRef}>
          <Button
            buttonRef={menuButtonRef}
            appearance="backgroundIcon"
            onClick={(event: React.MouseEvent): void => {
              event.preventDefault();
              changeShowMenuActions();
            }}
          >
            <BsThreeDotsVertical />
          </Button>
          <Dropdown
            isOpen={showMenuActions}
            setOpen={setShowMenuActions}
            bindingRef={menuButtonRef}
          >
            <RenderMenuActions menuActions={menuActions} />
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
