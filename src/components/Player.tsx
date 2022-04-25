import React, { useState, useRef, useEffect } from "react";
import "../styles/App.scss";
import AudioControls from "./AudioControls";

const Player = (props: any) => {
  const audioElm = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      // audioElm.current.play();
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
        if (s === 0) {
          return s;
        } else {
          return s - 1;
        }
      }
    });
    audioElm.current.load();
    audioElm.current.play();
  };

  useEffect(() => {
    setIsPlaying(true);
    audioElm.current?.play();
  }, [props.currentSongIndex]);

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
        onLoadedMetadata={(e: any) => {
          setDuration(e.target.duration);
        }}
        onTimeUpdate={(e: any) => {
          setValue(e.target?.currentTime);
        }}
      ></audio>
      <div className="range-progress">
        <progress value={value} max={duration} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Player;
