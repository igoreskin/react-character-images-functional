import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import ImageDisplayView from './components/ImageDisplayView';

import 'animate.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={MainContainer} />
        <Route path='/:id' component={ImageDisplayView} />
      </div>
    </Router>
  );
}

export default App;
