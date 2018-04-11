import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";


class Todomvc extends Component {

    render () {
        return (
            <div >
                <Header />
                <TodoList />
                <Footer />
            </div>
        );
    }
}

export default Todomvc;