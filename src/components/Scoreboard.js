import React from 'react';
import Ticker from 'react-ticker';
import '../styles/Scoreboard.css';
import useTournaments from '../hooks/useTournaments';

/** Component Documentation Here */
const Scoreboard = () => {

    const playerData = useTournaments();

    return (
        <div className="Scoreboard">
            <Ticker>
                {({index}) => (
                    <div className="Score">{playerData[Math.floor(index % playerData.length)].firstName} {playerData[Math.floor(index % playerData.length)].lastName}</div>
                )}
            </Ticker>
        </div>
    );
}

export default Scoreboard;
