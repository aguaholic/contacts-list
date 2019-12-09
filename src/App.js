import React from 'react';
import './App.css';
import Container from './Tabs/Container';

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container />
      </div>
    </Router>

  );
}

export default App;
