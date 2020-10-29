import React from "react";

class Dropdown extends React.Component {
   render() {
      return (
         <React.Fragment>
            <select>
               <option>123</option>
               {this.makeOptions()}
               <option>3432</option>
            </select>
         </React.Fragment>
      );
   }

   makeOptions(text) {
      const setup = {
         id: "dsdksd",
         label: 2978,
      };
      const option = React.createElement("option", setup);
      return option;
   }
}

export default Dropdown;
