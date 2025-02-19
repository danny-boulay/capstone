import logo from '../assets/logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header className="Header">
            <div>
                <img src={logo} className="Logo" alt="logo" />
            </div>
            <Nav/>
        </header>
    );
}

export default Header;