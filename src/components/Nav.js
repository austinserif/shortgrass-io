import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerCollapseReverse } from 'react-animated-burgers'

import '../styles/Nav.css';
import useToggle from '../hooks/useToggle';

const Nav = () => {
    const [ isActive, toggleButton ] = useToggle();
    return (
        <div className="Nav">
            <Link id="home-icon" className="Nav-link" to="/">Shortgrass</Link>
            <HamburgerCollapseReverse className="Nav-link" buttonWidth={30} isActive={isActive} toggleButton={toggleButton}/>
            {/* <Link className="Nav-link" to="/about">about</Link>
            <Link className="Nav-link" to="/digest">digest</Link>
            <Link className="Nav-link" to="/technology">technology</Link> */}
        </div>
    );
}

export default Nav;