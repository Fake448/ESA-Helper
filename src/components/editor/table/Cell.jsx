// https://engineering.shopify.com/blogs/engineering/building-data-table-component-react

import React, { Component } from 'react';

class Cell extends Component {
   constructor(props){
      super(props)
   }
   
   render() { 
      console.log('Cell-props : :>> ', this.props);
      return ( 
         <div>Cell</div>
       );
   }
}
 
export default Cell;


// export default function Cell({ content, header }) {
//    const cellMarkup = header ? (
//       <th className="Cell Cell-header">{content}</th>
//    ) : (
//       <td className="Cell">{content}</td>
//    );

//    return cellMarkup;
// }
