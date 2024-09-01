import HeroBanner from "../components/HeroBanner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Timeline from '../pages/Timeline';
import { Link } from 'react-router-dom';

function page_1() {
    return (
        <div className="page_1">
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Timeline/>
            <Testimonials />
            <Contact />
            <Footer />
            <Link to="/about">
                <button>Go to the Webmaster of the page</button>
            </Link>
        </div>
    );
}

export default page_1;
