import React, { useContext } from 'react'
import SideBar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './components/context/playerContext'

const App = () => {
  const {audioRef,track} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-black '>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Display />
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
