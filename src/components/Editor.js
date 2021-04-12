// import { useState } from 'react';

const Editor = ({ handleChange, inputMarkdown }) => (
  <textarea 
    id="editor" 
    value={inputMarkdown} 
    className="textAreaStyles"
    onChange={handleChange} />
);

export default Editor
