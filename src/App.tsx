import Header from "./pages/Header";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Trends from "./pages/screens/Trends";
import Artist from "./pages/screens/Artist";
import Library from "./pages/screens/Library";
import Discover from "./pages/screens/Discover";
import Playlist from "./pages/screens/Playlist";
import LikedSongs from "./pages/screens/LikedSongs";
import { Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import Player from "./components/Player";
import Form from "./components/Form";
// import Provider from "./contextStore/SongContext";
import { useEffect, useState } from "react";

function App() {
  const [songs] = useState([
    { url: require("./assets/audio/01.mp3") },
    { url: require("./assets/audio/02.mp3") },
    { url: require("./assets/audio/03.mp3") },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  console.log(currentSongIndex);

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
      />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/trends" component={Trends} />
        <Route path="/library" component={Library} />
        <Route path="/discover" component={Discover} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/daily" component={Form} />
        <Route path="/likedsongs" component={LikedSongs} />
        <Route path="/artist" component={Artist} />
      </Switch>
    </div>
  );
}

export default App;
