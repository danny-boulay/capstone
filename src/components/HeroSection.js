import restaurantfood from '../assets/restaurant_food.jpg';

function HeroSection() {
    return (
        <div className="HeroSection">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="HeroContainer">
                <div className="HeroDescription">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button type='button'>Reserve a Table</button>
                </div>
                <div className="HeroImageContainer">
                    <img src={restaurantfood} alt="restaurantfood" className="HeroImage"/>
                </div>
            </div>
           <div className="EmptyContainer"></div> {/* Container droit */}
        </div>
    );
}

export default HeroSection;