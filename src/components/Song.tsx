import "../styles/App.css";
import { songList } from "../data/Songlist";

const Song = () => {
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
          {songList.map((songs) => {
            return (
              <tr>
                <td>{songs.id}</td>
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
