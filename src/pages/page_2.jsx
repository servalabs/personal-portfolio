import HeroBanner from "../components/herroMAXBanner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function page_2() {
    return (
        <div className="page_2">
        
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default page_2;
