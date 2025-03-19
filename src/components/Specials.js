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
      <section className="Specials">
          <div className="EmptyContainer"></div> {/* Container gauche */}
          <div className="SpecialsContainer">
              <div className="SpecialsHeader">
                  <h2>This week’s specials!</h2>
                  <button className="order-button" aria-label="Order food online">Order Online</button>
              </div>
              <div className="SpecialsCards">
                  {specials.map((item) => (
                      <article key={item.id} className="SpecialCard" aria-label={`Special: ${item.title}`}>
                          <img src={item.image} alt={item.title} className="SpecialImage" />
                          <div className="SpecialInfo">
                              <div className="SpecialTitle">
                                  <h3>{item.title}</h3>
                                  <span className="SpecialPrice" aria-label={`Price: ${item.price}`}>{item.price}</span>
                              </div>
                              <p className="SpecialDescription">{item.description}</p>
                              <button className="delivery-button" aria-label={`Order delivery for ${item.title}`}>Order Delivery 🚴‍♂️</button>
                          </div>
                      </article>
                  ))}
              </div>
          </div>
          <div className="EmptyContainer"></div> {/* Container droit */}
      </section>
  );
}

export default Specials;