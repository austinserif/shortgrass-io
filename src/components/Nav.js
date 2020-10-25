import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerCollapseReverse } from 'react-animated-burgers'

import '../styles/Nav.css';
import useToggle from '../hooks/useToggle';
import { useSelector } from 'react-redux';

const Nav = () => {

    const { color, backgroundColor } = useSelector(v => (v.backgrounds));

    //set isActive vairable into state to keep track of side nav status
    const [ isActive, toggleButton ] = useToggle();

    //register dropDown and dropDownBox elements into reference using 
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
            <Link id="home-icon" className="Nav-link" to="/" style={{ color }}>Shortgrass</Link>
            <div className="Nav-drop-down" ref={dropDownBox} style={{ backgroundColor }}>
                <div>
                    <HamburgerCollapseReverse className="Nav-link" buttonWidth={30} isActive={isActive} toggleButton={toggleButton} barColor={color}/>
                </div>
                <div className="menu active" ref={dropDown}>
                    <div>
                        <Link className="Nav-link" to="/technology" style={{ color }}>Technology</Link>                    
                    </div>
                    <div>
                        <Link className="Nav-link" to="/digest" style={{ color }}>Digest</Link>                    
                    </div>
                    <div>
                        <Link className="Nav-link" to="/about" style={{ color }}>About</Link>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;