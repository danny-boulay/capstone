import restaurantfood from '../assets/restaurant_food.jpg';
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="HeroSection" aria-labelledby="hero-header">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="HeroContainer">
                <div className="HeroDescription">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button type="button" aria-label="Reserve a table at Little Lemon">Reserve a Table</button>
                    </Link>
                </div>
                <div className="HeroImageContainer">
                    <img src={restaurantfood} alt="Mediterranean restaurant food" className="HeroImage"/>
                </div>
            </div>
           <div className="EmptyContainer"></div> {/* Container droit */}
        </section>
    );
}

export default HeroSection;