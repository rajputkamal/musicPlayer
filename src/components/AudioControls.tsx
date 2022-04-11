import React from "react";
import "../styles/App.scss";
import {
  BiSkipPreviousCircle as Prev,
  BiPlayCircle as Play,
  BiPauseCircle as Pause,
  BiFastForwardCircle as Next,
} from "react-icons/bi";

const AudioControls = (props: any) => {
  return (
    <div className="buttons">
      <button
        type="button"
        className="buttons_btn"
        aria-label="Previous"
        onClick={props.onPrevClick}
      >
        <Prev />
      </button>
      {props.isPlaying ? (
        <button
          type="button"
          className="buttons_btn"
          onClick={() => props.onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="buttons_btn"
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
        onClick={props.onNextClick}
      >
        <Next />
      </button>
    </div>
  );
};

export default AudioControls;
