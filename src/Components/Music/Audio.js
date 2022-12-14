import React from 'react'
import {useState} from "react";
import Player from './Player';

function Audio() {
const [songs,setSongs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./Music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./Music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./Music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./Music/somebody-new.mp3"
    }
  ]);

  const [songIndex, setSongIndex] = useState(0);
  const [nextsongIndex, setNextSongIndex] = useState(songIndex+1);


  return (
    <div className='Audio'>
        <Player song={songs[songIndex]} nextSong ={songs[nextsongIndex]}/>

    </div>
  )
}

export default Audio