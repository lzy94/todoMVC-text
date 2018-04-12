import React, { Component } from "react";
import TodoItem from "./todoItem/index";
import propTypes from "prop-types";


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            check:true,
            todos:[]
        }
        
    }
    

    allCheck = () => {
        let todos = this.state.todos;
        let check = !this.state.check;
        todos.map(( item,i ) =>{ 
            todos[i].completed = check;
        })
        this.setState({
            todos:todos,
            check:check
        });

    }

    render(){
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" onClick={ this.allCheck }/>
                <TodoItem todos={ this.props.todos } />
            </section>
        );
    }
}
TodoList.propTypes={
    todos:propTypes.array
}
export default TodoList;