import React, { Component } from "react";

class Footer extends Component{

    render(){
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{ this.props.len }</strong>
                    <span> </span>
                    <span> { this.props.len > 1 ?'items':'item' }</span>
                    <span> </span>
                    <span>left</span>
                </span>
                <ul className="filters">
                    <li> 
                        <a href="#" className="selected">All</a>
                    </li>
                    <span></span>
                    <li> 
                        <a href="#" >Active</a>
                    </li>
                    <span> </span>
                    <li> 
                        <a href="#">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        );
    }

}
export default Footer;