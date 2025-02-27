import HeroSection from "../components/HeroSection";
import Specials from "../components/Specials";
import Reviews from "../components/Reviews";
import About from "../components/About";

function HomePage() {
    return (
        <>
            <HeroSection />
            <Specials />
            <Reviews />
            <About />
        </>
    );
}

export default HomePage;