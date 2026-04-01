import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import SelectedCard from '../../../../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer, coin, setCoin }) => {
    console.log(selectedPlayer)
    const handleDeleteBtn = (player) => {
        console.log(selectedPlayer, "selectedPlayers")
        const filterPlayers = selectedPlayer.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName)
        console.log(filterPlayers, "filterPlayers")
        setSelectedPlayer(filterPlayers)
        setCoin(coin + player.price)
    }
    return (
        <div>
            <div className='space-y-4'>
                {
                    selectedPlayer.length === 0 ?
                        <div className='h-[400px] flex items-center justify-center flex-col'>
                            <h2 className='font-semibold '>No players selected yet</h2>
                            <p>Go to avalable to set the Player</p>
                        </div> :
                        selectedPlayer.map((player, ind) => {
                            return (
                             <SelectedCard key={ind} player={player} handleDeleteBtn={handleDeleteBtn}></SelectedCard>
                        )})
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;