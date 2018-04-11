import React, { Component } from "react";

class Footer extends Component{

    render(){
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>1</strong>
                    <span> </span>
                    <span>item</span>
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
            </footer>
        );
    }

}
export default Footer;