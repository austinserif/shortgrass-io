import React from 'react';
import '../styles/Home.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';



const Home = () => {

    const { backgroundColor, color } = useSelector(v => (v.backgrounds));

    return (
        <div className="Home" style={{ backgroundColor, color }}>
            <section className="Section" id="first-section">
                <div className="SectionBody">
                    <h1>Technology</h1>
                </div>
                <div className="SectionChevron">
                    <Link 
                    to='second-section'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={1000}
                    >
                        <button style={{fontSize: '40px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color}}><FontAwesomeIcon icon={faChevronDown} color={color}/></button>
                    </Link>                
                </div>
            </section>
            <section className="Section" id="second-section">
                <div className="SectionBody">
                    <h1>Digest</h1>
                </div>
                <div className="SectionChevron">
                    <Link 
                    to='third-section'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={1000}
                    >
                        <button style={{fontSize: '40px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}><FontAwesomeIcon icon={faChevronDown} color={color}/></button>
                    </Link>                
                </div>
            </section>
            <section className="Section" id="third-section">
                <div className="SectionBody">
                    <h1>About</h1>
                </div>
                <div className="SectionChevron">
                    <Link 
                    to='first-section'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={1000}
                    >
                        <button style={{fontSize: '40px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}><FontAwesomeIcon icon={faChevronUp} color={color}/></button>
                    </Link>                
                </div>
            </section>

        </div>
    );
}

export default Home;