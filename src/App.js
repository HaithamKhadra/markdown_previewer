import React from 'react';
import Badge from "react-bootstrap/Badge";
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';
import './App.css';

const md = `# this is a markdown previewer
## This is a secondary heading! 
> front end libraries projects on [freeCodeCamp](https://www.freecodecamp.org/)
- Random Quote Machine
- Markdown Previewer
- Drum Machine
- Javascript Calculator
- Pomodoro Clock

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine ==  && lastLine == ) {
    return multiLineCode;
  }
}
\`\`\`
![React Logo](https://brandlogovector.com/wp-content/uploads/2020/08/React-Logo.png)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMarkdown: md
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange = e => {
    this.setState({
      inputMarkdown: e.target.value
    });
  };

  render() {
    const inputMarkdown = this.state.inputMarkdown;

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <h1>
                <Badge className="text-align-center" variant="dark">Markdown Previewer</Badge>
              </h1>
            </div>
            <div className="col-md-6" id="editor-wrapper">
              <div className="col text-center">
                <h2>
                  <Badge className="text-align-center" variant="info">Editor</Badge>
                </h2>
              </div>
              <div>
                <form>
                  <Editor handleChange={this.handleChange}
                    inputMarkdown={inputMarkdown} />
                </form>
              </div>
            </div>

            <div className="col-md-6" id="preview-wrapper">
              <div className="col text-center">
                <h2>
                  <Badge className="text-align-center" variant="info">Previewer</Badge>
                </h2>
              </div>
              <Previewer inputMarkdown={inputMarkdown} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
