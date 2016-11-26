import React from 'react';

var SearchBar = React.createClass({
    onHandleChangText:function(){
        var text = this.refs.inp.value;
        this.props.changetext(text);
    },
    render:function(){
        return (
            <div>
                <input type ="text"ref='inp'onChange = {this.onHandleChangText}/>
                <input type ="checkbox"onClick = {this.props.changeShowStocked}/>
            </div>
        )
    }
})
export default SearchBar