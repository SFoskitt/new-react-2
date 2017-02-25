import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi, Sundee!</h2>
        </div>
        <p className="App-intro">
          New tasks:
          {/*input for new tasks*/}
        </p>
        <p className="App-intro">
          Existing tasks:
          {/*add repeater for existing tasks*/}
        </p>
      </div>
    );
  }
}

export default App;
