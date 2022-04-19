
import Song from "../components/Song";
import { songList } from "../data/Songlist";
import "../styles/App.scss";

const Main = (props) => {
const playSongHandler = () => {

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
        <Song />
        
      </div>
    </div>
  );
};

export default Main;
