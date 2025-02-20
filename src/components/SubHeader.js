import restaurantfood from '../assets/restaurant_food.jpg';

function SubHeader() {
    return (
        <div className="SubHeader">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="Content">
                <div className="Description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button type='button'>Reserve a Table</button>
                </div>
                <div className="ImageContainer">
                        <img src={restaurantfood} alt="restaurantfood" className="SubHeaderImage"/>
                </div>
            </div>
           <div className="EmptyContainer"></div> {/* Container droit */}
        </div>
    );
}

export default SubHeader;