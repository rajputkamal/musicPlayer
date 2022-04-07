import "../styles/App.scss";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineHeart,
  AiOutlineCalendar,
  AiOutlineCiCircle,
  AiOutlineBars,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={require("../assets/images/logo.png")} />
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <AiOutlineHome />
            <a href="#">Home</a>
          </li>
          <li>
            <AiOutlineHome />
            <a href="#">Trends</a>
          </li>
          <li>
            <AiOutlineBars />
            <a href="#">Library</a>
          </li>
        </ul>

        <ul>
          <span>Discover</span>
          <li>
            <AiOutlineCalendar />
            <a href="#">Discover Weekly</a>
          </li>
          <li>
            <AiOutlineCiCircle />
            <a href="#">Made For You</a>
          </li>
          <li>
            <AiOutlineBars />
            <a href="#">Daily Mix</a>
          </li>
        </ul>

        <ul>
          <span>Your Collection</span>
          <li>
            <AiOutlineHeart />
            <a href="#">Liked Songs</a>
          </li>
          <li>
            <AiOutlineUserSwitch />
            <a href="#">Favourite Artists</a>
          </li>
          <li>
            <AiOutlineBars />
            <a href="#">Playlist</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
