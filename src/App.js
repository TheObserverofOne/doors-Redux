import React, { Component } from 'react';

import Display from './components/Display';
import Controls from './components/Controls';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Controls />
        <Display />
      </div>
    );
  }
}

export default App;
