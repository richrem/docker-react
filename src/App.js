import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Congratulations</h1>
          <p>You've reached the docker-react app. We just added a new feature, too!</p>
        </header>
      </div>
    );
  }
}

export default App;
