import '../styles/App.scss';
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className='header'>
      <div className='search-bar'>
        <input type="text" placeholder='search' className='input'/>
        <AiOutlineSearch className='search-icon'/>
      </div>
    </div>
  )
}

export default Header;