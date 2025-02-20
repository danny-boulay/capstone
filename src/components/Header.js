import { useState } from 'react';
import logo from '../assets/logo.svg';
import Nav from './Nav';
import { Menu, X } from "lucide-react"; // Icônes pour le menu

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="Header">
            <div>
                <img src={logo} className="Logo" alt="logo" />
            </div>

            {/* Bouton hamburger */}
            <button className="Hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            <Nav isOpen={isOpen}/>
        </header>
    );
}

export default Header;