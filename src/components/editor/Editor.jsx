import React from "react";
import Table from "./table/Table";
import "./editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Editor">
        <h1>Editor</h1>
        <Table data={this.props.data} />
        <br />
      </div>
    );
  }
}

export default Editor;
