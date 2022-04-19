import "../styles/App.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineHeart,
  AiOutlineCalendar,
  AiOutlineCiCircle,
  AiOutlineBars,
} from "react-icons/ai";
// import { ReactComponent as Logo } from './logo'

const Navbar = () => {
 
  return (

    
    <nav className="nav">
      <div className="logo">
        {/* <Logo /> */}
        <img src={require("../assets/images/logo.png")} />
        
      </div>
    
      <div className="nav-links">
        <ul>
          <li className="active">
            <AiOutlineHome />
            <Link to="/"  className="active">Home</Link>
          </li>
          <li>
            <AiOutlineHome />
            <Link to="/trends">Trends</Link>
          </li>
          <li>
            <AiOutlineBars />
            <Link to="/library">Library</Link>
          </li>
        </ul>

        <ul>
          <span>Discover</span>
          <li>
            <AiOutlineCalendar />
            <Link to="/discover">Discover Weekly</Link>
          </li>
          <li>
            <AiOutlineCiCircle />
            <Link to="/playlist">Made For You</Link>
          </li>
          <li>
            <AiOutlineBars />
            <Link to="/daily">Daily Mix</Link>
          </li>
        </ul>

        <ul>
          <span>Your Collection</span>
          <li>
            <AiOutlineHeart />
            <Link to="/likedsongs">Liked Songs</Link>
          </li>
          <li>
            <AiOutlineUserSwitch />
            <Link to="/artist">Favourite Artists</Link>
          </li>
          <li>
            <AiOutlineBars />
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
