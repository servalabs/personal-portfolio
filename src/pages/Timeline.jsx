
import './Timeline.css';


import logo1 from '../assets/fractal_design_logo.jpg';
import logo2 from '../assets/techgg_logo.jpg';
import logo4 from '../assets/servalabs_logo.jpg';
import logo3 from '../assets/1636109633595.jpg';


const Timeline = () => {
  const experiences = [
    {
      img: logo4,
      alt: 'ServaLabs',
      title: 'Founder',
      company: 'ServaLabs',
      duration: '2024 - Present',
      description: 'Started ServaLabs in 2024 to decentralise compute and AI in homes to improve data localisation, reducing external dependence and making enterprise features accessible to consumers, via our own OS',
      position: 'left',
      cardClass: 'htmlcard',
      arrowClass: 'htmlarrow',
    },
    {
      img: logo2,
      alt: 'logo2',
      title: 'TECHGG.ORG',
      company: 'TechGG',
      duration: '2021 - Present',
      description: 'We help brands in prelaunch testing and post-production reviews.I have been through multiple cycles from an idea to a product on hand.We work based on impact and believe in long-term relationships rather than transactions.',
      position: 'right',
      cardClass: 'javascriptcard',
      arrowClass: 'javascriptarrow',
    },
    {
      img: logo1,
      alt: 'logo1',
      title: 'Product Consultant',
      company: 'Fractal Design',
      duration: 'Jul 2021 - Apr 2024 · 2 yrs 10 mos',
      description: 'Leveraging deep product knowledge and market insights to drive strategic solutions and optimize product performance as a Product Consultant.',
      position: 'left',
      cardClass: 'reactjscard',
      arrowClass: 'reactjsarrow',
    },
    {
      img: logo3,
      alt: 'logo3',
      title: 'Advisor',
      company: 'Scooway',
      duration: 'Aug 2022 - Sep 2022 · 2 mos',
      description: 'Worked with Scooway, a Shenzhen based company to go global with e-scooters.Optimized their launch campaign on Kickstarter and advised on marketing spend.',
      position: 'right',
      cardClass: 'nodejscard',
      arrowClass: 'nodejsarrow',
    },
  ];

  return (
    <div className='main'>
      <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[60px] md:text-[90px] 2xl:text-[120px] leading-[60px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient md:mb-4 md:sticky relative ">
        <span>Experience</span>
      </div>

      <div className='timeline'>
        {experiences.map((experience, index) => (
          <div key={index} className={`container ${experience.position}-container`}>
            <img src={experience.img} alt={experience.alt} />
            <div className={`text-box ${experience.cardClass}`}>
              <h2 className={`${experience.title.toLowerCase()}text`}> {experience.title} </h2>
              <small> <span className='company'> {experience.company} </span> {experience.duration} </small>
              <p>{experience.description}</p>
              <span className={`${experience.position}-container-arrow ${experience.arrowClass}`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
