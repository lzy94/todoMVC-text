import React, { Component } from "react";
import propTypes from "prop-types";
import todoList from "./data";

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[],
        }
    }

    click (i) {
        let todos = this.props.todos;
        let check = todos[i.i].completed;
        todos[i.i].completed = ! check;
        this.setState({
            todos:todos
        });
    }

    readList(){
        return this.props.todos.map((item,i)=>{
            return (
                <li className={ item.completed?'completed':'' } key={ i }>
                    <div className="view" >
                        <input onClick={ this.click.bind(this,{i}) } className="toggle" type="checkbox" defaultChecked={ item.completed?'checked':'' } />
                        <label>{ item.title }</label>
                        <button className="destroy" ></button>
                    </div>
                    <input className="edit" defaultValue="{ item.title }" />
                </li>
            );
        })
    }

    render(){
        var read = this.readList();
        return (
            <ul className="todo-list">
                { read }
            </ul>
        );
    }
}

TodoItem.propTypes = {
    todos:propTypes.array
}

export default TodoItem;