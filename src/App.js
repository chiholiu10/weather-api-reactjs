import React from 'react';
import './App.scss';
import { AppComponent } from "./components/App/App";

function App() {
  return (
    <div className="App" data-testid="app-component">
      <AppComponent/>
    </div>
  );
}

export default App;
