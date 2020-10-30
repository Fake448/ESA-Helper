import React, { Component } from "react";
import Cell from "./Cell";

class Table extends Component {


  renderHeadingRow = (_cell, cellIndex) => {
    const headings = this.props;

    return (
      <table>
        <Cell />
      </table>
    );
  };



  
  render() {
    const headings = this.props.data;

    console.log("headings", headings);

    const theadMarkup = (
      <tr key="heading"></tr>
    );

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
