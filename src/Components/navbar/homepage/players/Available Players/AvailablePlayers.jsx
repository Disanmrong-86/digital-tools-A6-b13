import React from 'react';
import Card from '../../../../ui/card';


const AvailablePlayers = ({ players,setCoin, coin , setSelectedPlayer,selectedPlayer }) => {
    console.log(players, "players")
    return (
        <>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        players.map((player,index) => {
                            return <Card setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} coin={coin} setCoin={setCoin} key={index} player={player}></Card>

                        })
                    }
                </div>
            </div>

        </>
    );
};

export default AvailablePlayers;