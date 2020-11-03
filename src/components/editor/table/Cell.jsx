// https://engineering.shopify.com/blogs/engineering/building-data-table-component-react

import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props.content :>> ", this.props.content);
    return (
      <tr>
        <th>{this.item}</th>
      </tr>
    );
  }
}

export default Cell;
