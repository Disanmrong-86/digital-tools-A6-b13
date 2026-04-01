
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/navbar/homepage/banner/banner'
import Player from './Components/navbar/homepage/players/Player';
import Navbar from './Components/navbar/Navbar'
import { ToastContainer } from 'react-toastify';
// import Navbar from './practise Components/NAV/Navbar';
// import Player from './practise Components/player/Player';

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json()
}

function App() {
  const playerPromise = fetchPlayer()
  const [coin,setCoin]= useState(500000)
  return (
    <>
   
    <Navbar coin={coin}></Navbar>
      {/* <Banner></Banner> */}
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Player coin={coin} setCoin={setCoin} playerPromise={playerPromise}></Player>
      </Suspense>
      {/* <Navbar coin={coin}></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Player setCoin={setCoin} coin={coin} playerPromise={playerPromise}></Player>
      </Suspense> */}

      <ToastContainer />
    </>
  )
}

export default App
