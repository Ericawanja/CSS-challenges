import React from 'react';

import './App.css';
import Features from './components/Feautures';
import Header from './components/Header';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pricing/>
      <Features/>
    </div>
  );
}

export default App;
