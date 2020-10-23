import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routes from './components/Routes';
import Scoreboard from './components/Scoreboard';
import useScrollPosition from '@react-hook/window-scroll'
import { useDispatch } from 'react-redux';
import { blackBackground, blueBackground, whiteBackground } from './actions/actionCreators';

function App() {

  const scrollY = useScrollPosition(30);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (scrollY > 500 && scrollY <= 1000) {
      dispatch(blackBackground());
    } else if (scrollY > 1000) {
      dispatch(blueBackground());
    } else {
      dispatch(whiteBackground());
    }
  }, [scrollY, dispatch]);

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