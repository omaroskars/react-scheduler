import React, { Component } from 'react';
import './App.css';

import data from './mockData';
import Scheduler from './Scheduler';

function Resource({ index }) {
  return (
    <div style={{
      width: 200,
      height: 100,
    }}>
      {data[index].name}
    </div>
  );
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <Scheduler
          resources={data}
          Resource={Resource}
        />
      </div>
    );
  }
}

export default App;
