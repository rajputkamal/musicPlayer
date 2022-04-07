import React from "react";
import { songList } from "../data/Songlist";

const Song = (props: any) => {
  console.log(songList);
  console.log(props);
  return (
    <>
      <table>
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
          <tr>
            <td>1</td>
            <td>
              <img src={props.image} />{" "}
            </td>
            <td>{props.title}</td>
            <td>{props.playing}</td>
            <td>{props.duration}</td>
            <td>{props.year}</td>
          </tr>
        </tbody>
      </table>
      <li className="song-list">
        <div>#</div>
        <div>IMAGE</div>
        <div>TITLE</div>
        <div>PLAYING</div>
        <div>TIME</div>
        <div>ALBUM</div>
      </li>

      <li className="song-list">
        <div>1</div>
        <div>
          <img src={props.image} />{" "}
        </div>
        <div>{props.title}</div>
        <div>{props.playing}</div>
        <div>{props.duration}</div>
        <div>{props.year}</div>
      </li>
    </>
  );
};

export default Song;
