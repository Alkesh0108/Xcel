import React from 'react'
import PlayerDetails from './PlayerDetails'
import PlayersControls from './PlayersControls'

function Player(props) {
  return (
    <div className='c-player'>
        <audio></audio>
        <h4>PlayingNow</h4>
        <PlayerDetails song={props.song}/>
        <PlayersControls/>
        <p><strong>Next Up</strong> {props.nextSong.title} by {props.nextSong.artist}</p>


    </div>
  )
}

export default Player