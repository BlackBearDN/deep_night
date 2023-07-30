import React from "react";
import { createPortal } from "react-dom";
import { ModalCloseButton, ModalContent, ModalStyled } from "./modal.styled";
import CloseIcon from "../../assets/icons/components/CloseIcon";

const Modal: React.FC<{
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, isOpen, setIsOpen }) => {
  const escEventListener = (event: KeyboardEvent): void => {
    if (isOpen && event.code === "Escape") {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    // DISABLE SCROLL
    if (!isOpen) {
      document.body.style.overflowY = "initial";
      return;
    }

    document.body.style.overflowY = "hidden";

    // ADD ESC EVENT
    document.addEventListener("keyup", escEventListener);

    return () => {
      document.removeEventListener("keyup", escEventListener);
    };
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return createPortal(
    <ModalStyled>
      <ModalContent>{children}</ModalContent>
      <ModalCloseButton>
        <CloseIcon
          onClick={(e: React.MouseEvent): void => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        />
      </ModalCloseButton>
    </ModalStyled>,
    document.body
  );
};

export default Modal;
