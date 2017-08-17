import React, { Component } from 'react';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
          <Map/>
      </div>
    );
  }
}

export default App;
