import mario_and_adrian_1 from '../assets/Mario_and_Adrian_1.jpg';
import mario_and_adrian_2 from '../assets/Mario_and_Adrian_2.jpg';

function About() {
    return (
        <section className="About" aria-labelledby="about-header">
            <div className="EmptyContainer"></div> {/* Container gauche */}
            <div className="AboutContainer">
                <div className="AboutDescription">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials. Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.</p>
                </div>
                <div className="AboutImageContainer">
                    <img src={mario_and_adrian_1} alt="Mario and Adrian, the owners of Little Lemon" className="AboutImage" />
                    <img src={mario_and_adrian_2} alt="Mario and Adrian preparing food" className="AboutImage2" />
                </div>
            </div>
            <div className="EmptyContainer"></div> {/* Container droit */}
        </section>
    );
}

export default About;