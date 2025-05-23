import AboutCard from "./AboutCard";
import { FAQ } from "../../utils/aboutFAQ";

const AboutSection = () => {
  return (
    <div className="aboutSection mx-auto mt-20 gap-20 mb-20 px-5 sm:px-20">
      <div
        id="aboutCardContainer"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {FAQ.map((item, ind) => (
          <AboutCard key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
