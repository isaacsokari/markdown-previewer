import React from 'react';

import Editor from './components/Editor';
import Preview from './components/Previewer';

import './App.css';

import placeholderText from './data/placeholder';

const App = () => {
  const [markdownText, setMarkdownText] = React.useState(placeholderText);

  return (
    <>
      <h1>MarkDown Previewer</h1>
      <div className="main">
      <Editor {...{ markdownText, setMarkdownText }} />
      <Preview {...{ markdownText }} />
      </div>
    </>
  );
};

export default App;

