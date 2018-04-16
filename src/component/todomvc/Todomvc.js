import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";

class Todomvc extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            len:0
        }
    }
    
    dataList = (todos) => {
        this.setState({
            todos:todos
        },() => {
            this.getLen();
        })
    }

    getLen(){
        let num = 0;
        let todos = this.state.todos;
        for(let i = 0; i < todos.length; i++){
            if(todos[i].completed == false){
                num++;
            }
        }
        this.setState({
            len:num
        })
    }




    render () {
        return (
            <div>
                <Header dataList = { this.dataList } />
                <TodoList todos = { this.state.todos } dataList = { this.dataList }/>
                <Footer len = { this.state.len } />
            </div>
        );
    }
}

export default Todomvc;