import React from 'react';
var ProductCategory = React.createClass({
    render:function(){
        return (
            <tr>
                <td>{this.props.category}</td>
            </tr>
              
        )
    }
})
export default ProductCategory