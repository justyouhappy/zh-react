import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './Components/SearchBar.js';
import ProductTable from './Components/ProductTable.js';
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Baskettball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iWatch'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'iPad'},
];
var Appshow = React.createClass({
    getInitialState:function(){
        return {
            OnlyShowStocked:false,
            filtertext:''
         }
    },
    changeShowStocked:function(){
        this.setState({
            OnlyShowStocked:!this.state.OnlyShowStocked
        });
    },
    changeflitertext:function(str){
        this.setState({
            filtertext:str
        });
    },
    render:function(){
        var product = this.props.product;
        return (
            <div>
                <SearchBar changeShowStocked ={this.changeShowStocked} changetext = {this.changeflitertext}></SearchBar>
                <ProductTable product = {product} filtertext = {this.state.filtertext} OnlyShowStocked = {this.state.OnlyShowStocked}></ProductTable>
            </div>
        )
    }
})


ReactDom.render(
    <Appshow product = {PRODUCTS}></Appshow>,
    document.getElementById('root')
)