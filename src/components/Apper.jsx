 
import Marquee from 'react-fast-marquee';

// IMAGES
import sk1 from "../assets/sk-1.jpg";
import sk2 from "../assets/sk-2.jpg";
import sk3 from "../assets/sk-3.jpg";
import sk4 from "../assets/sk-4.jpg";
import sk5 from "../assets/sk-5.jpg";
import sk6 from "../assets/sk-6.jpg";
import sk7 from "../assets/sk-7.jpg";
import sk8 from "../assets/sk-8.jpg";
import sk9 from "../assets/sk-9.jpg";
import sk10 from "../assets/sk-10.jpg";
import sk11 from "../assets/sk-11.jpg";
import sk12 from "../assets/sk-12.jpg";
import sk13 from "../assets/sk-13.jpg";
import sk14 from "../assets/sk-14.jpg";
import sk15 from "../assets/sk-15.jpg";
import sk16 from "../assets/sk-16.jpg";
import sk17 from "../assets/sk-17.jpg";
import sk18 from "../assets/sk-18.jpg";
import sk19 from "../assets/sk-19.jpg";
import sk20 from "../assets/sk-20.jpg";
import sk21 from "../assets/23.jpg";
import './appx.css';  // Create this file for custom CSS

function Apper() {
    return (
      <div className="App">
         
  
        <div>
          <Marquee direction="right" speed={200} delay={5}>
            <div className="image_wrapper">
              <img src={sk1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk4} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk6} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk7} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk8} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk9} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk10} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk21} alt="" />
            </div>
          </Marquee>
          <div className="my-16"></div>
          <Marquee direction="left" speed={200} delay={5}>
            <div className="image_wrapper">
              <img src={sk11} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk12} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk13} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk14} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk15} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk16} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk17} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk18} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk19} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sk20} alt="" />
            </div>
          </Marquee>
     
        </div>
      </div>
    );
  }
  
  export default Apper;
  