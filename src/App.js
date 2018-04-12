import React, { Component } from 'react';
import './App.css';
import Todomvc from "./component/todomvc/Todomvc"

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
