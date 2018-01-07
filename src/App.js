import React, { Component } from 'react';
import { Provider  } from 'mobx-react';

import bookStore from './common/stores/bookStore.js';
import authorStore from './common/stores/authorStore.js';

import Sidebar from './common/components/Sidebar/Sidebar.js';
import Content from './common/components/Content/Content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Provider bookStore={bookStore} authorStore={authorStore}>
          <Content />
        </Provider>     
      </div>
    );
  }
}

export default App;
