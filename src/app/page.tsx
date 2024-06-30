import { HeroSection, ServiceSection } from './components';
import About from './components/templates/about-section';

const Home = () => {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <About />
        </>
    );
};

export default Home;
