import React from 'react';
import ProductRow from './ProductRow.js';
import ProductCategory from './ProductCategory.js';


var ProductTable = React.createClass({
    render:function(){
         var product = this.props.product;
         var row = [];
         var lastcategory = '';
         var OnlyShowStocked = this.props.OnlyShowStocked;
         var filtertext = this.props.filtertext;
         product.forEach(function(ele,index){
             if(lastcategory != ele.category){
                 lastcategory = ele.category;
                 row.push(<ProductCategory key = {index} category = {ele.category} ></ProductCategory>);
             }
             if(!(OnlyShowStocked&&!ele.stocked)){
                 if(ele.name.indexOf(filtertext)!== -1){
                     row.push(<ProductRow key = {index+100} name = {ele.name} price = {ele.price} stocked = {ele.stocked} ></ProductRow>);
                 }
                
             }
             
         })
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>                   
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        )
    }
})
export default ProductTable