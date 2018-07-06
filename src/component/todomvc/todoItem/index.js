import React, { Component } from "react";
import propTypes from "prop-types";
import todoList from "./data";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    change = i => {
        let todos = this.props.todos;
        let check = todos[i.i].completed;
        todos[i.i].completed = !check;
        this.setState({
            todos: todos
        });
    }
    remove = i => {
        let todos = this.props.todos;
        todos.splice(i.i, 1);
        this.setState({
            todos: todos
        });
    }

    readList() {
        return this.props.todos.map((item, i) => {
            return (
                <li className={item.completed ? 'completed' : ''} key={i}>
                    <div className="view" >
                        <input onChange={this.change.bind(this, { i })} className="toggle" type="checkbox" checked={item.completed} />
                        <label>{item.title}</label>
                        <button className="destroy" onClick={this.remove.bind(this, { i })} ></button>
                    </div>
                    <input className="edit" defaultValue="{ item.title }" />
                </li>
            );
        })
    }

    render() {
        var read = this.readList();
        return (
            <ul className="todo-list">
                {read}
            </ul>
        );
    }
}

TodoItem.propTypes = {
    todos: propTypes.array
}

export default TodoItem;