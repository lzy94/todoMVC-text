import React, { Component } from "react";
import { todoList } from "./data";

class TodoItem extends Component {


    readList(){



    }

    render(){
        return (
            <ul className="todo-list">
                <li className="" >
                    <div className="view" >
                        <input className="toggle" type="checkbox" />
                        <label>23</label>
                        <button className="destroy" ></button>
                    </div>
                    <input className="edit" defaultValue="23" />
                </li>
            </ul>
        );
    }
}
export default TodoItem;