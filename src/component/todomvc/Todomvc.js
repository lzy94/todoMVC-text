import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";

class Todomvc extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }
    
    dataList = (e) => {
        if(e.keyCode===13){
            this.setState({
                todos:[{
                completed:false,
                title:e.target.value
            },...this.state.todos]});
        }
    }

    render () {
        return (
            <div>
                <Header dataList = { this.dataList } />
                <TodoList todos = { this.state.todos } />
                <Footer />
            </div>
        );
    }
}

export default Todomvc;