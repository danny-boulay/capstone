import { Link } from "react-router-dom";

const Nav = ({ isOpen, setIsOpen }) => {
    return (
      <nav className={`Navbar ${isOpen ? "open" : ""}`}>
        <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/booking" onClick={() => setIsOpen(false)}>Reservations</Link></li>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Order Online</Link></li>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    );
}

export default Nav;