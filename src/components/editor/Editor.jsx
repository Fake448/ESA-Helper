import React from "react";
import "./editor.css";

// import Dropdown from "./Dropdown";
import Table from './table/Table'

class Editor extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div className="Editor">
            <h1>Editor</h1>
            <Table data= {this.props.data} />
            <br />
         </div>
      );
   }
}


export default Editor;
