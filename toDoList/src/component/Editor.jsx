import "./Editor.css";
import { useState, useRef } from "react";
const Editor = ({ on_Create }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeydown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    on_Create(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 todo"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
