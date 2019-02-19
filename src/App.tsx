import React, { Component } from "react";
import AppToolBar from "./toolbar/Toolbar";
import TodoContainer from "./main/todos/TodoContainer";
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppToolBar></AppToolBar>
        <TodoContainer></TodoContainer>
      </div>     
    );
  }
}

export default App;
