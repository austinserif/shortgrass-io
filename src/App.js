import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routes from './components/Routes';
import Scoreboard from './components/Scoreboard';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="sticky see-through">
          <Scoreboard/>
          <Nav/>
        </div>
        <div className="">
          <Routes/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;