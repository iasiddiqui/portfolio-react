import { useState } from "react";
import {
  easyProjects,
  hardProjects,
  mediumProjects,
  subHeading,
} from "../../utils/data";
import Project from "./Project";

const ProjectsContainer = () => {
  let [projectTrack, setProjectTrack] = useState("easy");

  const handleProject = (check) => setProjectTrack(check);

  return (
    <section id="projects" className="bg-[url(/sectionBG/project.svg)] bg-cover bg-fixed pt-20">
      <div className="mx-auto w-[90%] sm:w-[88%] md:w-[75%]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-center mt-2 text-xs sm:text-sm md:text-base xl:text-lg text-slate-700">
          A Comprehensive Showcase of Frontend Projects: Navigating Through
          Simple, Medium, and Hard Levels to Demonstrate the Journey of Building
          Interactive and Responsive Web Experiences, Highlighting Core Skills,
          Framework Expertise, and Problem-Solving Capabilities at Every Stage
        </p>
      </div>

      {/* ___________ Buttons to show projects ___________  */}
      <div
        className={`flex justify-center mt-16 rounded-t-3xl w-[85%] mx-auto pt-10`}
      >
        <button
          className={`active:bg-blue-300 text-xs sm:text-sm md:text-base lg:text-lg w-64 py-3 rounded-l-full border-2 border-blue-500  ${
            projectTrack == "easy"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-y-transparent border-none"
              : "bg-blue-200"
          }`}
          onClick={() => handleProject("easy")}
        >
          Simple projects
        </button>
        <button
          className={`active:bg-blue-300 text-xs sm:text-sm md:text-base lg:text-lg w-64 py-3  border-t-2 border-r-2 border-b-2 border-blue-500 ${
            projectTrack == "medium"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "bg-blue-200"
          }`}
          onClick={() => handleProject("medium")}
        >
          Medium Projects
        </button>
        <button
          className={`active:bg-blue-300 text-xs sm:text-sm md:text-base lg:text-lg w-64 py-3 rounded-r-full border-t-2 border-r-2 border-b-2 border-blue-500  ${
            projectTrack == "hard"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "bg-blue-200"
          }`}
          onClick={() => handleProject("hard")}
        >
          Tough Projects
        </button>
      </div>

      {/* ___________ All Projects ___________ */}
      <div className="mx-auto w-[70%] sm:w-[85%]">
        {subHeading.map(
          (heading, ind) =>
            heading.level == projectTrack && (
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-center mt-3 text-slate-700 font-thin"
                key={ind}
              >
                {heading.title}
              </p>
            )
        )}

        <div
          className={`grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8`}
        >
          {/* Easy project */}
          {projectTrack == "easy" &&
            easyProjects.map((data, ind) => <Project key={ind} data={data} />)}

          {/* Medium project */}
          {projectTrack == "medium" &&
            mediumProjects.map((data, ind) => (
              <Project key={ind} data={data} />
            ))}

          {/* Hard project */}
          {projectTrack == "hard" &&
            hardProjects.map((data, ind) => <Project key={ind} data={data} />)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
