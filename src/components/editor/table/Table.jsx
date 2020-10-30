import React, { Component } from "react";
import Cell from "./Cell";

class Table extends Component {
   renderHeadingRow = (_cell, cellIndex) => {
      const { headings } = this.props;

      return (
         <Cell
            key={`heading-${cellIndex}`}
            content={headings[cellIndex]}
            header={true}
         />
      );
   };

   state = {};

   render() {
      const headings = this.props.data;
      console.log('headings', headings)

      // this.renderHeadingRow = this.renderHeadingRow.bind(this);

      const theadMarkup = (
         <tr key="heading"></tr>


         // <tr key="heading">{headings.map(this.renderHeadingRow)}</tr>
      )

      for (const item in this.props.data) {
         if (this.props.data.hasOwnProperty(item)) {
            console.log("item", item);
            console.log("this.props.data[item]", this.props.data[item]);

            // const allElements = this.props.data[item];
            // console.log("element", allElements);
         }
      }
      return (
         <table>
            <thead>{theadMarkup}</thead>
         </table>
      );
   }
}

export default Table;
