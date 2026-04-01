import React from 'react';
import dollerImg from "../../assets/Currency.png"

const Navbar = ({coin}) => {
    return (
        <div className="navbar container mx-auto bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="font-bold text-xl flex justify-between items-center gap-2">
                    {coin} Coins
                   <img src={dollerImg}></img>
                </button>
            </div>
        </div>
    );
};

export default Navbar;