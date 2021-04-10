import React from 'react';
import Badge from "react-bootstrap/Badge";
import { Form } from "react-bootstrap";
import './App.css';


let marked = require("marked");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: `# Welcome to my React Markdown Previewer!

      ## This is a sub-heading...
      ### And here's some other cool stuff:
      
      
      You can also make text **bold**... whoa!
      Or _italic_.
      Or... wait for it... **_both!_**
      And feel free to go crazy ~~crossing stuff out~~.
      
      There's also [links](https://www.freecodecamp.com), and
      
      
      - And of course there are lists.
        - Some are bulleted.
           - With different indentation levels.
              - That look like this.
      
      
      1. And there are numbererd lists too.
      1. Use just 1s if you want!
      1. And last but not least, let's not forget embedded images:
      
      > Block quote

      ![React Logo w/ Text](public/logo192.png)`      
    }
    this.onEditing = this.onEditing.bind(this);
  }

  onEditing = (event) => {
    this.setState({
      inputText: event.target.value
    });
    event.preventDefault();
  }

  render() {
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
              <form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control className="textAreaStyles" as="textarea" value={this.state.inputText} onChange={this.state.onEditing}/>
                </Form.Group>
              </form>
            </div>
            <div className="col-md-6" id="preview-wrapper">
              <div className="col text-center">
                <h2>
                  <Badge className="text-align-center" variant="info">Previewer</Badge>
                </h2>
              </div>
              <div className="prevStyles" dangerouslySetInnerHTML={{__html: marked(this.state.inputText)}} id="preview">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
