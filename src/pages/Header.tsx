import "../styles/App.scss";
import "../styles/style.css";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/_breakpoints.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="mobile-logo">
        <img src={require("../assets/images/logo.png")} />
      </div>
      <div className="search-bar">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="search" className="input" />
      </div>
    </div>
  );
};

export default Header;
