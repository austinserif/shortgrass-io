import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="sticky see-through">
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