import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "../styles/App.scss";
import AudioControls from "./AudioControls";
import { songList } from "../data/Songlist";

const Audioplayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(songList.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    console.log('prev clicking', songList)
  };

  const toNextTrack = () => {
    if (trackIndex < songList.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    console.log('next clicking', songList)
  };

  return (
    <div className="audio-player">
      {/* <div className="song-info">
        <img src={songList[0].image} />
        <h2 className="title">{songList[0].title}</h2>
        <h3 className="artist">{songList[0].artist}</h3>
      </div> */}
      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
      <ReactAudioPlayer
        src={songList[0].url}
        autoPlay
        controls
        className="music-player"
      />
    </div>
  );
};

export default Audioplayer;
