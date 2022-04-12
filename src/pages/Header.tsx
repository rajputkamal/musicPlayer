import "../styles/App.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="search" className="input" />
      </div>
    </div>
  );
};

export default Header;
