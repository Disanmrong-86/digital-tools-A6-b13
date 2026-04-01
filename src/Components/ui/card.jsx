import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin,selectedPlayer,setSelectedPlayer }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleChoosePlayer = () => {
        let newCoin = coin - player.price
        if(newCoin >= 0){
            toast.success (`${player.playerName} is Selected`)
            setCoin(coin - player.price)
            setIsSelected(!isSelected)
            setSelectedPlayer([...selectedPlayer,player])
        }else{
            toast.error(`Not Enough coin to purchase this Player`)
        }
        
    }
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.playerName}</h2>
                <div className='flex gap-2 justify-between items-center'>
                    <div className='flex gap-2  items-center'>
                        <FaFlag />
                        <p>{player.playerCountry}</p>
                    </div>
                    <button className='btn'>{player.playerType}</button>
                </div>
                <div className='divider'></div>
                <div className='font-bold'>Rating:({player.rating})</div>

                <div className='flex justify-between font-bold'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bowlingStyle}</p>
                </div>


                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>Price:{player.price} </p>
                    <button disabled={isSelected} onClick={handleChoosePlayer} className="btn">{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;