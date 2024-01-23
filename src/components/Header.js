import Navbar from './Navbar';
import MobileNav from "./MobileNav";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          EUfondovi
        </Link>
        <Navbar />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;