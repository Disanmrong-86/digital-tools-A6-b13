import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({player,handleDeleteBtn}) => {
    return (
        <div  className="flex items-center  gap-6 justify-between p-8 rounded-2xl">
                                        <div className='flex items-center gap-6'>
                                            <img className='h-25 w-auto rounded-md' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt={player.playerName} />
                                            <div>
                                                <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUserAlt />{player.playerName}</h2>
                                                <p>{player.playerType}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeleteBtn(player)} className='btn text-red-500'>
                                            <MdDelete />
                                        </button>
                                    </div>
    );
};

export default SelectedCard;