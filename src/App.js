import React from 'react';
import './App.css';
import Container from './Tabs/Container';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container />
        <Route path="/:letter">
          <div>high</div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
