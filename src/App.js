import React from 'react';
import './App.scss';
import Search from './components/search/index';
import Result from './components/result/index';

function App() {
  return (
    <div className="App">
      <Search/>
      <Result/>
    </div>
  );
}

export default App;
