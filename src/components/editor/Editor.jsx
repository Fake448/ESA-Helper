import React from "react";
import Data from "../../data/data.json";
import Dropdown from "./Dropdown";

class Editor extends React.Component {
   state = {};
   render() {
      return (
         <div class="editor">
            <h1>Editor</h1>
            <br />
            Merkmale:
            <Dropdown data={Data} />
         </div>
      );
   }
}

export default Editor;
