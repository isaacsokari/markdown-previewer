import React from "react";

const Editor = ({ markdownText, setMarkdownText }) => {
  return (
    <div className="editor-container">
      <h3>Editor</h3>
      <textarea
        className="editor"
        id="editor"
        onChange={(e) => {
          setMarkdownText(e.target.value);
        }}
      value={markdownText}>
      </textarea>
    </div>
  );
};

export default Editor;