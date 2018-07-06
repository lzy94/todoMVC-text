import React, { Component } from "react";
import todeList from "./todoItem/data";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            todos: []
        }
    }

    dataList = (e) => {
        if (e.keyCode === 13) {
            if (!this.state.val) return;
            this.setState({
                todos: [{
                    completed: false,
                    title: this.state.val,
                }, ...this.state.todos]
            }, () => {
                this.setState({ val: '' })
                this.props.dataList(this.state.todos)
            });
        }
    }

    change = (e) => {
        this.setState({
            val: e.target.value
        })
    }


    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" value={this.state.val} placeholder="What needs to be done?" onChange={this.change} onKeyUp={this.dataList} />
            </header>
        );
    }

}
export default Header;