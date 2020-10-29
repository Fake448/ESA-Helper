import React from "react";
import Dropdown from "./Dropdown";

class Editor extends React.Component {
   state = {};
   render() {
      return (
         <div class="editor">
            <h1>Editor</h1>
            <br />
            <Dropdown />
         </div>
      );
   }
}

export default Editor;
