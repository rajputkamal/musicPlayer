import React from "react";
import ReactAudioPlayer from "react-audio-player";
import '../styles/App.scss';
import { BiSkipPreviousCircle, BiPlayCircle, BiPauseCircle, BiFastForwardCircle } from "react-icons/bi";

const Audioplayer = () => {
  return (
    <div className="audio-player">
        <div className="buttons">
            <span><BiSkipPreviousCircle /></span>
            <span className="play-pause"><BiPlayCircle /> <BiPauseCircle /></span>
            <span><BiFastForwardCircle /></span>
        </div>
      <ReactAudioPlayer src={require('../assets/audio/01.mp3')} autoPlay controls className="music-player"/>
    </div>
  );
};

export default Audioplayer;
