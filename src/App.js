import React, { Component } from 'react';
import Sidebar from './common/components/Sidebar/Sidebar.js';
import Content from './common/components/Content/Content.js';
import './App.css';
import { Provider  } from 'mobx-react';
import bookStore from './common/stores/bookStore.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Provider bookStore={bookStore}>
          <Content />
        </Provider>     
      </div>
    );
  }
}

export default App;
