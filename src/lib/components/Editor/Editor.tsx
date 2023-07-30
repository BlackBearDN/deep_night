import React from "react";
import JoditEditor from "jodit-react";
import EditorStyled from "./styles/editor.styled";
import editorDefaultConfig from "./configs/editorDefaultConfig";

const Editor: React.FC<{ content: string; onBlur?: (newContent: string) => void }> = ({
  content,
  onBlur,
}) => {
  return (
    <EditorStyled>
      <JoditEditor value={content} config={editorDefaultConfig} onBlur={onBlur} />
    </EditorStyled>
  );
};

export default Editor;
