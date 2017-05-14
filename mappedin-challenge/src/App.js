import React, { Component } from 'react';
import Repos from './Repos';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <h1>Starred repos for <span>axiomaticdesign</span></h1>
          <Repos/>
      </div>
    );
  }
}

export default App;
