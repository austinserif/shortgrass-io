import { useState, useEffect } from 'react';
import golferData from '../data/golfer-data.json';

const useTournaments = () => {

    const [ playerData, setPlayerData ] = useState(['Loading...']);

    useEffect(() => {
        const getPlayers = () => {

            //map only desired data
            const basicInfo = golferData.map(v => ({
                firstName: v.FirstName,
                lastName: v.LastName
            }));

            //set player data to new player info array
            setPlayerData(basicInfo);
        }

        //call getPlayers if triggered
        getPlayers();

        //execute only on first render
    }, []);
        
    return playerData;
}

export default useTournaments;