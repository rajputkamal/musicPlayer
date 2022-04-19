import React from "react";
import "../styles/App.scss";
import {
  BiShuffle as Shuffle,
  BiSkipPreviousCircle as Prev,
  BiPlayCircle as Play,
  BiPauseCircle as Pause,
  BiSkipNextCircle as Next,
} from "react-icons/bi";

import { TiArrowLoop as Loop } from "react-icons/ti";

const AudioControls = (props: any) => {
  return (
    <div className="buttons">
      <button type="button" className="shuffle">
        <Shuffle />
      </button>
      <button
        type="button"
        className="buttons_btn"
        aria-label="Previous"
        onClick={props.changeSongIndex}
      >
        <Prev />
      </button>
      {props.isPlaying ? (
        <button
          type="button"
          className="play-pause"
          onClick={() => props.onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play-pause"
          onClick={() => props.onPlayPauseClick(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}
      <button
        type="button"
        className="buttons_btn"
        aria-label="Next"
        onClick={() => props.changeSongIndex(true)}
      >
        <Next />
      </button>
      <button type="button" className="buttons_btn">
        <Loop />
      </button>
    </div>
  );
};

export default AudioControls;
