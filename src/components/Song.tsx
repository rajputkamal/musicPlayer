import { useState, useRef, useEffect } from "react";
import "../styles/App.css";
import { songList } from "../data/Songlist";
import { FaPlay as Play, FaPause as Pause } from "react-icons/fa";

const Song = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const songReceiveHandler = (song) => {
    const songData = {
      url: song.url
    };

    props.onReceieveSongData(songData);
  };
  return (
    <>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>#</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PLAYING</th>
            <th>TIME</th>
            <th>ALBUM</th>
          </tr>
        </thead>
        <tbody>
          {songList.map((songs) => {
            return (
              <tr key={songs.id} onClick={() => songReceiveHandler(songs)}>
                <td>{!isPlaying ? <Play /> : <Pause />}</td>
                <td>
                  <img src={songs.image} className="artist_img" />
                </td>
                <td>{songs.title}</td>
                <td>{songs.listeners}</td>
                <td>{songs.time}</td>
                <td>{songs.yearOfAlbum}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Song;
