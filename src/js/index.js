import React from 'react';
import ReactDom from 'react-dom';
import "../less/AppInit.less"
var data =  [
    {
      "name": "magasa",
      "slug": "magasa",
      "avatarUrl": "./user_avatar_1.png",
      "bio": "电影杂志《虹膜》主编（支持iOS/Android平台）",
      "id": 1
    },
    {
      "name": "程毅南",
      "slug": "cheng-yi-nan",
      "avatarUrl": "./user_avatar_2.png",
      "bio": "美国心理学和经济学本科毕业。强推《知识分子与社会》",
      "id": 2
    },
    {
      "name": "田吉顺",
      "slug": "tian-ji-shun",
      "avatarUrl": "./user_avatar_3.png",
      "bio": "妇产科医生",
      "id": 3
    },
    {
      "name": "周源",
      "slug": "zhouyuan",
      "avatarUrl": "./user_avatar_4.png",
      "bio": "知乎 001 号员工",
      "id": 4
    },
    {
      "name": "黄继新",
      "slug": "jixin",
      "avatarUrl": "./user_avatar_5.png",
      "bio": "和知乎在一起",
      "id": 5
    },
    {
      "name": "李申申",
      "slug": "shen",
      "avatarUrl": "./user_avatar_6.png",
      "bio": "知乎 002 号员工",
      "id": 6
    },
    {
      "name": "Raymond Wang",
      "slug": "raymond-wang",
      "avatarUrl": "./user_avatar_7.png",
      "bio": "lawyer",
      "id": 7
    }
];
var SearchBar = React.createClass({
    onHandleFilter: function () {
        this.props.filterTextFunc(this.refs.inp.value);
    },
    render:function(){
        var data = this.props.data;
        var row = [];
        data.forEach(function(ele,index){
            row.push(<span key = {index}>{ele.name}</span>)
        })
        return (
            <div className = "search">
                <input type="text"onChange={this.onHandleFilter}ref="inp"/>
                您已经邀请{row}等{row.length}人
            </div>
        )
    }
})
var ListIteam = React.createClass({
    onHaddle:function(){
        this.props.toggevents(this.props.id);
    },
    render:function(){
    var can = this.props.can;
    var style={}
      can?style.background = "#8ab923":style.background="#f1f1f2";
      
       return(
           <li>
                <img src={"./src/img/"+this.props.avatarUrl} />
                <div>{this.props.name}</div>
                <div>{this.props.bio}</div>
                <button style = {style} onClick = {this.onHaddle}>{can?'邀请回答':'收回邀请'}</button>
            </li>
        )
       
    }
})
var ListInvite = React.createClass({
    render:function(){
    
        var data = this.props.data;
        console.log(this.props);
        var filterText=this.props.filter;
        var row = [];
        var toggevents = this.props.toggevents;
        data.forEach(function(ele,index){
            if (ele.name.indexOf(filterText) !== -1) {
                row.push(<ListIteam can = {ele.canInvite}id ={ele.id}toggevents= {toggevents}key={index+100} name={ele.name} bio={ele.bio} avatarUrl={ele.avatarUrl}></ListIteam>);
            }
        })
        return(
            <div className = "listWrapper">
                <ul>
                    {row}
                </ul>
            </div>
        )
    }
})

var AppInit = React.createClass({
    getInitialState:function(){
        return{
            list:[],
            inviteOrder:[],
            filterText:'',
        }
    },
    componentDidMount:function(){
        var list = [];
        var data = this.props.data;
        data.forEach(function(ele,index){
            ele.canInvite = true;
            list.push(ele);
        })
        this.setState({
            list:list
        })
    },
    toggevents:function(id){
        var togglePerson = null;
        console.log(id);
        var list = this.state.list.map(function(ele,index){
            if(ele.id === id){
                togglePerson = ele;
                ele.canInvite = !ele.canInvite;
            }
            return ele;
        });
        this.setState({
            list:list
        });
        var orderArray = [...this.state.inviteOrder];
        if (!togglePerson.canInvite) {
            orderArray.push(togglePerson);
        }else {
            orderArray = orderArray.filter(function (ele, index) {
                return !(ele.id === togglePerson.id);
            });
        }
        // console.log(orderArray);
        this.setState({
            inviteOrder: orderArray
        });
    },
    filterTextFunc: function (text) {
       this.setState({
           filterText: text
       }) 
    },
    render:function(){
        return (
            <div className = "wrapper">
                <SearchBar data={this.state.inviteOrder} filterTextFunc = {this.filterTextFunc}></SearchBar>
                <ListInvite data = {this.state.list} toggevents= {this.toggevents} filter={this.state.filterText}></ListInvite>
            </div>
        )
    }
})


ReactDom.render(
    <AppInit data = {data}></AppInit>,
    document.getElementById('root')
)