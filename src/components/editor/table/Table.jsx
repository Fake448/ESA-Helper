import React from "react";
import Cell from "./Cell";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead></thead>
        <tbody>
          <Cell content={this.props.data} />
        </tbody>
      </table>
    );
  }

  Cells() {
    return <Cell />;
  }
}

export default Table;
