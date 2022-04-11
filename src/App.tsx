import Header from "./pages/Header";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Trends from "./pages/screens/Trends";
import Artist from "./pages/screens/Artist";
import Library from "./pages/screens/Library";
import Discover from "./pages/screens/Discover";
import Playlist from "./pages/screens/Playlist";
import Daily from "./pages/screens/Daily";
import LikedSongs from "./pages/screens/LikedSongs";

import { Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import Audioplayer from "./components/Audioplayer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <Audioplayer />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/trends" component={Trends} />
        <Route path="/library" component= {Library} />
        <Route path="/discover" component={Discover} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/daily" component={Daily} />
        <Route path="/likedsongs" component={LikedSongs} />
        <Route path="/artist" component={Artist} />
      </Switch>
    </div>
  );
}

export default App;
