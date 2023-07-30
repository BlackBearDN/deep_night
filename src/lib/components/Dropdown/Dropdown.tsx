import React, { useState } from "react";
import { createPortal } from "react-dom";
import { DropdownStyled } from "./styles/dropdown.styled";
import IPositions from "./interfaces/IPositions";
import UseOutsideClick from "../../hooks/useOutsideClick";

const Dropdown: React.FC<
  {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    xPosition?: number;
    yPosition?: number;
    xOffset?: number;
    yOffset?: number;
    bindingRef?: React.RefObject<any>;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({
  isOpen,
  setOpen,
  children,
  xPosition,
  yPosition,
  xOffset = 0,
  yOffset = 3,
  bindingRef,
  ...attrs
}) => {
  const dropdownRef = React.useRef(null);
  const [bindingPositions, setBindingPositions] = useState<IPositions>({
    x: 0,
    y: 0,
    width: 0,
  });

  UseOutsideClick([bindingRef, dropdownRef], () => setOpen(false), isOpen);

  React.useEffect(() => {
    const update = (): void => {
      const elementPositions = bindingRef?.current?.getBoundingClientRect();

      if (!elementPositions) {
        return;
      }

      setBindingPositions({
        x: elementPositions.left + document.documentElement.scrollLeft,
        y: elementPositions.top + elementPositions.height + document.documentElement.scrollTop,
        width: elementPositions.width,
      });
    };

    if (bindingRef) {
      update();
      document.addEventListener("scroll", update, true);
      window.addEventListener("resize", update, true);
    }

    return () => {
      document.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update, true);
    };
  }, [bindingRef]);

  if (!isOpen || (!xPosition && !yPosition && !bindingPositions.x && !bindingPositions.y))
    return <></>;

  return createPortal(
    <DropdownStyled
      {...attrs}
      ref={dropdownRef}
      $xPosition={(bindingPositions.x || xPosition || 0) + xOffset}
      $yPosition={(bindingPositions.y || yPosition || 0) + yOffset}
      $width={bindingPositions.width || 0}
    >
      {children}
    </DropdownStyled>,
    document.body,
  );
};

export default Dropdown;
