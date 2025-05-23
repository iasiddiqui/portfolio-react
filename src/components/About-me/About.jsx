import BallCanvas from "./BallCanvas";
import { Technologies } from "../../utils/technology";
import AboutSection from "./AboutSection";
import TechStack from "./TechStack";
// import Loader from "./Loader";

const About = () => {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <section
      id="about"
      className="bg-[url(/sectionBG/about.svg)] bg-cover bg-fixed pt-20 relative"
    >
      <div className="mx-auto w-[90%] sm:w-[88%] md:w-[75%]">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
          <span className="text-blue-500">About</span>
          Me
        </h2>
        <p className="text-justify text-center mt-2 text-xs sm:text-sm md:text-base xl:text-lg text-slate-900 text">
          A passionate Full Stack Developer based in Hyderabad, India, with
          practical experience in building modern web applications using the
          MERN stack (MongoDB, Express.js, React.js, and Node.js). Specializes
          in crafting responsive and user-centric interfaces with React.js,
          Material UI, and CSS, alongside developing scalable backend systems
          using Node.js and Express. Skilled in integrating RESTful APIs,
          managing databases, and deploying applications with a focus on
          performance and maintainability. Projects include a hiring platform,
          an international climate summit website, and a rental listing
          application - each demonstrating a commitment to clean architecture,
          seamless user experience, and impactful digital solutions. Driven by a
          problem-solving mindset and a collaborative approach to development,
          always aiming to deliver real value to businesses through modern,
          efficient, and scalable technology.
        </p>
      </div>

      <TechStack />

      <AboutSection />

      <div className="ball">
        <div className="w-full flex flex-row flex-wrap justify-center gap-10 py-12 px-5 md:px-8 lg:px-12 bg-gradient-to-r from-cyan-500 to-blue-500 py-15">
          {Technologies.map((tech, ind) => (
            <div
              key={ind}
              className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[75px] md:h-[75px] lg-[85px] lg:h-[85px] xl:w-[95px] xl:h-[95px]"
              title="Turn me around"
            >
              <BallCanvas icon={tech.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
