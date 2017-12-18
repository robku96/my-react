import React, { Component } from 'react';
import Sidebar from './common/components/Sidebar/Sidebar.js';
import Content from './common/components/Content/Content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
