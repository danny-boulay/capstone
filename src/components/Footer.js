import footer_logo from '../assets/footer_logo_1.svg'
function Footer(){
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div aria-labelledby="footer-contacts">
                    <h1>Contacts</h1>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="/">Phone Number</a></li>
                        <li><a href="/">Email</a></li>
                    </ul>
                </div>
                <div aria-labelledby="footer-social-media">
                    <h1>Social Media</h1>
                    <ul>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Tiktok</a></li>
                    </ul>
                </div>
            </div>
            <div className="EmptyContainer"></div> {/* Container droit */}
        </footer>
    );
}

export default Footer;