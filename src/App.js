import React, { Component } from 'react';
import './App.css';
import Name from './Name/Name';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Name of Student</h2>
          <Name name = "Dhruv" education = "B.E in Computer Engineering." color = "color-red"/>
          <Name name = "Yash" education = "M.S in Computer Science." color = "color-orange"/>
      </div>
    );
  }
}

export default App;