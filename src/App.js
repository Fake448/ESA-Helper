import React from "react";
import Editor from "./components/editor/Editor";
import Data from "./data/data";

class App extends React.Component {
  render() {
    console.clear();
    console.log("Data", Data);
    return (
      <div className="App">
        <Editor />
      </div>
    );
  }
}

export default App;
