import React, { use, useState } from 'react';
import AvailablePlayers from './Available Players/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';


const Player = ({playerPromise,setCoin,coin}) => {
    const players = use(playerPromise)
    const [selectedType,setSelectedType] =useState(false)
    const [selectedPlayer,setSelectedPlayer] = useState([])
    return (
        <div className='container mx-auto my-15'>
            <div className='flex justify-between gap-4 items-center mb-7.5'>
                <h2 className='font-bold text-3xl'>{selectedType ? `Selected Player (${selectedPlayer.length}/${players.length})`:"Available Player"}</h2>
                <div className='flex gap-2'>
                    <button onClick={()=>setSelectedType(!selectedType)} className={`btn ${selectedType ?"" :"bg-[#E7FE29]"}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={()=>setSelectedType(!selectedType)} className={`btn ${!selectedType ? "":"bg-[#E7FE29]"}  rounded-l-none rounded-r-xl`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>
           {selectedType ? <SelectedPlayers coin={coin} setCoin={setCoin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}></SelectedPlayers>: <AvailablePlayers coin={coin} setCoin={setCoin} players={players} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}></AvailablePlayers>}
        </div>
    );
};

export default Player;