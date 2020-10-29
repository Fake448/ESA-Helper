import React from "react";

class Dropdown extends React.Component {
   render() {
      return (
         <React.Fragment>
            Merkmale:<br />
            <select size="5">
               {this.makeOption("Hallo")}
               {this.makeOption("Hallo2")}
            </select>
         </React.Fragment>
      );
   }

   makeOption(text) {
      const option = React.createElement("option", {value:text}, text);
      return option;
   }

   getAllMerkmale() {

   }
}

export default Dropdown;
