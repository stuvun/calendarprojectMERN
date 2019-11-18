import React, { Component } from "react";
import "./App.css";
import Day from "./Container";
import Aside from "./Aside";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Day />
        <Aside />
      </div>
    );
  }
}

export default App;
