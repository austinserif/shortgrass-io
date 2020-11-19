import React, { useLayoutEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routes from './components/Routes';
import Scoreboard from './components/Scoreboard';
import useScrollPosition from '@react-hook/window-scroll'
import { useDispatch } from 'react-redux';
import { blackBackground, blueBackground, whiteBackground } from './actions/actionCreators';

function App() {

  const scrollY = useScrollPosition(60);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (scrollY > 500 && scrollY <= 1000) {
      dispatch(blackBackground());
      document.querySelectorAll('.Score').forEach((val) => {
        val.style.color = 'white';
      });
    } else if (scrollY > 1000) {
      dispatch(blueBackground());
      document.querySelectorAll('.Score').forEach((val) => {
        val.style.color = 'white';
      });
    } else {
      dispatch(whiteBackground());
      document.querySelectorAll('.Score').forEach((val) => {
        val.style.color = 'black';
      });
    }
  }, [scrollY, dispatch]);

  return (
    <div className="App">
      <HashRouter>
        <div className="sticky see-through">
          <Scoreboard/>
          <Nav/>
        </div>
        <div className="">
          <Routes/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;