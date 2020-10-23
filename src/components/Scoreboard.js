import React from 'react';
import Ticker from 'react-ticker';
import '../styles/Scoreboard.css';
import useTournaments from '../hooks/useTournaments';
import { useSelector } from 'react-redux';

/** Component Documentation Here */
const Scoreboard = () => {

    const playerData = useTournaments();

    const { backgroundColor, color } = useSelector(v => (v.backgrounds));

    return (
        <div className="Scoreboard" style={{borderColor: color, color, backgroundColor}}>
            <Ticker>
                {({index}) => (
                    <div className="Score" style={{ color }}>{playerData[Math.floor(index % playerData.length)].firstName} {playerData[Math.floor(index % playerData.length)].lastName}</div>
                )}
            </Ticker>
        </div>
    );
}

export default Scoreboard;
