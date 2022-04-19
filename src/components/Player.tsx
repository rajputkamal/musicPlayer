import React, { useState, useRef, useEffect } from "react";
import "../styles/App.scss";
import AudioControls from "./AudioControls";

const Player = (props: any) => {
  console.log(props.songs);
  const audioElm = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioElm.current.play();
    } else {
      audioElm.current.pause();
    }
  }, [isPlaying]);

  const changeSongIndex = (next = false) => {
    props.setCurrentSongIndex((s) => {
      if (next) {
        if (s < props.songs.length - 1) {
          return s + 1;
        }
        return s;
      } else {
        if (s - 1< 0) {
          return props.songs.length - 1;
        }
        return s - 1;
      }
    });
    // audioElm.current.load();
    audioElm.current.play()
  };

  return (
    <div className="audio-player">
      <AudioControls
        isPlaying={isPlaying}
        changeSongIndex={changeSongIndex}
        onPlayPauseClick={setIsPlaying}
      />
      <audio
        src={props.songs[props.currentSongIndex].url}
        ref={audioElm}
      ></audio>
      <div className="range-progress">
        <input
          type="range"
          //   value={trackProgress}
          step="1"
          min="0"
          //   max={duration ? duration : `${duration}`}
          className="progress"
        />
      </div>
    </div>
  );
};

export default Player;
