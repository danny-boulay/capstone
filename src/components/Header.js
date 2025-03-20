import { useState } from 'react';
import logo from '../assets/logo.svg';
import Nav from './Nav';
import { Menu, X } from "lucide-react"; // Icônes pour le menu
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="Header" aria-label="Website header">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="NavContainer">
                <div>
                    <Link to="/">
                        <img src={logo} className="Logo" alt="Little Lemon logo" />
                    </Link>
                </div>

                {/* Bouton hamburger */}
                <button
                    className="Hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className="EmptyContainer"></div> {/* Container droit */}
        </header>
    );
}

export default Header;