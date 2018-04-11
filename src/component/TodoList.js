import React, { Component } from "react";
import TodoItem from "./todoItem/index";

class TodoList extends Component {

    render(){
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <TodoItem />
            </section>
        );
    }
}
export default TodoList;