import React from "react";
import { ImageFullViewContainer, ImageStyled, ModalImage, ModalImageContent } from "./image.styled";
import Typography from "../Typography/Typography";
import Modal from "../Modal/Modal";
import UseOutsideClick from "../../hooks/useOutsideClick";
import { IoEyeOutline } from "react-icons/io5";

const Image: React.FC<
  { hasPreview?: boolean } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ hasPreview = true, className, width, height, src, alt = "image", ...attrs }) => {
  const [showPreview, setShowPreview] = React.useState<boolean>(false);
  const previewButtonRef = React.useRef<HTMLDivElement>(null);
  const previewContentRef = React.useRef<HTMLImageElement>(null);

  UseOutsideClick([previewButtonRef, previewContentRef], () => setShowPreview(false), showPreview);

  return (
    <ImageStyled className={className} style={{ width, height }}>
      <img {...attrs} src={src} alt={alt} />
      {hasPreview && (
        <ImageFullViewContainer
          ref={previewButtonRef}
          className="bn-previewContainer"
          onClick={(): void => setShowPreview(true)}
        >
          <IoEyeOutline />
          <Typography type="span">Предпросмотр</Typography>
        </ImageFullViewContainer>
      )}
      <Modal isOpen={showPreview} setIsOpen={setShowPreview}>
        <ModalImageContent>
          <ModalImage ref={previewContentRef} src={src} alt={alt} />
        </ModalImageContent>
      </Modal>
    </ImageStyled>
  );
};

export default Image;
