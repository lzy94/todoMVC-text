import React, { Component } from "react";
import TodoItem from "./todoItem/index";
import propTypes from "prop-types";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            todos: []
        }

    }


    allCheck = () => {
        let todos = this.props.todos;
        let check = !this.state.check;
        todos.map((item, i) => {
            todos[i].completed = check;
        })
        this.setState({
            check: check
        });
        this.props.dataList(todos)
    }
    componentWillReceiveProps(news){
        this.setState({
            todos:news.todos
        })
    }

    render() {
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" onClick={this.allCheck} />
                <TodoItem todos={this.state.todos} />
            </section>
        );
    }
}
TodoList.propTypes = {
    todos: propTypes.array
}
export default TodoList;