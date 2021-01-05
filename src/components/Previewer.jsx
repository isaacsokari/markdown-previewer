import React from 'react';
import marked from 'marked'

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}">${text}</a>`;

const Preview = ({ markdownText }) => {
  return (
    <div className="preview-container">
      <h3>Preview</h3>
      <div
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdownText, { renderer }) }}
      />
    </div>
  );
};

export default Preview;