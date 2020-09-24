import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerCollapseReverse } from 'react-animated-burgers'

import '../styles/Nav.css';
import useToggle from '../hooks/useToggle';

const Nav = () => {
    const [ isActive, toggleButton ] = useToggle();
    const dropDown = useRef();
    const dropDownBox = useRef();

    useEffect(()=> {
        const toggleSideMenu = () => {
            (dropDown.current.className === 'menu active') ? (dropDown.current.className = 'menu hidden') : (dropDown.current.className = 'menu active');
            console.log(dropDown.current.className);
        }
        toggleSideMenu();
    }, [isActive]);

    return (
        <div className="Nav">
            <Link id="home-icon" className="Nav-link" to="/">Shortgrass</Link>
            <div className="Nav-drop-down" ref={dropDownBox}>
                <div>
                    <HamburgerCollapseReverse className="Nav-link" buttonWidth={30} isActive={isActive} toggleButton={toggleButton}/>
                </div>
                <div className="menu active" ref={dropDown}>
                    <div>
                        <Link className="Nav-link" to="/technology">Technology</Link>                    
                    </div>
                    <div>
                        <Link className="Nav-link" to="/digest">Digest</Link>                    
                    </div>
                    <div>
                        <Link className="Nav-link" to="/about">About</Link>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;