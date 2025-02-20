import greekSalad from "../assets/greek_salad.jpg";
import bruschetta from "../assets/bruschetta.svg";
import lemonDessert from "../assets/lemon_dessert.jpg";


const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
    },
    {
      id: 2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschetta,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];
  
  function Specials() {
    return (
        <div className="specials-wrapper">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="specials">
                <div className="specials-header">
                    <h2>This week’s specials!</h2>
                    <button className="order-button">Order Online</button>
                </div>
                <div className="specials-container">
                    {specials.map((item) => (
                        <div key={item.id} className="special-card">
                            <img src={item.image} alt={item.title} className="special-image" />
                            <div className="special-info">
                                <div className="special-title">
                                    <h3>{item.title}</h3>
                                    <span className="special-price">{item.price}</span>
                                </div>
                                <p className="special-description">{item.description}</p>
                                <button className="delivery-button">Order Delivery 🚴‍♂️</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="EmptyContainer"></div> {/* Container droit */}
        </div>
    );
}
  export default Specials;