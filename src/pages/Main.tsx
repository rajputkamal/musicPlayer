import Song from "../components/Song";
import { songList } from "../data/Songlist";
import "../styles/App.scss";
import "../styles/style.css";
import "../styles/_breakpoints.scss";

const Main = (props) => {
const receiveSongHandler = (songData) => {
  const songsData = {
    ...songData,
    id: Date.now()
  }
  props.onReceiveSong(songsData)
}

  return (
    <div className="main">
      <div className="banner">
        <img src= {require("../assets/images/banner_2.jpg")} />
      </div>

      <div className="main_section_songList">
        <div className="song-list-header">
          <h1>Popular</h1>
          <p>
            <a href="/">See All</a>
          </p>
        </div>
        <Song onReceieveSongData ={receiveSongHandler}/>
        
      </div>
    </div>
  );
};

export default Main;
