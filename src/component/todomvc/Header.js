import React, { Component } from "react";
import todeList from "./todoItem/data";

class Header extends Component{


    render(){
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" onKeyUp = { this.props.dataList }/>
            </header>
        );
    }

}
export default Header;