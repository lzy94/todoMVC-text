import React, { Component } from 'react';
import './App.css';
import Todomvc from "./component/Todomvc"

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Todomvc />
      </section>
    );
  }
}

export default App;
