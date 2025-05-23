import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const skills = [
  { name: "React", level: 80, color: "bg-blue-500" },
  { name: "JavaScript", level: 90, color: "bg-yellow-400" },
  { name: "Node.js", level: 70, color: "bg-green-500" },
  { name: "Express", level: 70, color: "bg-red-700" },
  { name: "MongoDB", level: 75, color: "bg-green-600" },
  { name: "Git & GitHub", level: 70, color: "bg-orange-500" },
  { name: "JAVA", level: 60, color: "bg-blue-400" },
];

const TechStack = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".skill-bar").forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: "0%" }, // Start from 0 width
        {
          width: bar.dataset.width + "%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%", // Starts animation when bar is 85% visible
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="tech-container my-12 py-10 px-7 sm:px-10 md:px-20 lg:px-24 bg-[#efe4e4] dark:bg-[#1e1e1e] rounded-xl shadow-md">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-left">
        Technologies I Use
      </h2>
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-8 text-left">
        Here is a breakdown of my expertise in different technologies:
      </p>

      <div>
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 sm:h-3">
              <div
                className={`skill-bar h-2 sm:h-3 rounded-full ${skill.color}`}
                data-width={skill.level} // Store width in data attribute
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
