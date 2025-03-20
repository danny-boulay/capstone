import { Link } from "react-router-dom";
import footer_logo from "../assets/footer_logo_1.svg";

function Footer() {
    return (
        <footer className="Footer" aria-label="Footer">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="FooterContainer">
                <div>
                    <img src={footer_logo} className="FooterLogo" alt="Little Lemon footer logo" />
                </div>
                <div aria-labelledby="footer-navigation">
                    <h1>Navigation</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
                <div aria-labelledby="footer-contacts">
                    <h1>Contacts</h1>
                    <ul>
                        <li><Link to="/">Address</Link></li>
                        <li><Link to="/">Phone Number</Link></li>
                        <li><Link to="/">Email</Link></li>
                    </ul>
                </div>
                <div aria-labelledby="footer-social-media">
                    <h1>Social Media</h1>
                    <ul>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Tiktok</Link></li>
                    </ul>
                </div>
            </div>
            <div className="EmptyContainer"></div> {/* Container droit */}
        </footer>
    );
}

export default Footer;