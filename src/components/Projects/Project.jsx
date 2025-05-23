import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Project = (props) => {
  let { banner, description, link, repoLink, title, tools, completed } =
    props.data;

  return (
    <div
      className={`card relative ${!completed && "cardBefore"} rounded-3xl shadow-lg relative overflow-hidden`}
    >
      <div>
        <img
          src={banner}
          alt={title}
          loading="lazy"
          className="w-full h-48 object- rounded-t-3xl brightness-[80%] overflow-hidden"
        />
      </div>

      <div className="content opacity-0 text-white absolute w-full h-0 overflow-hidden rounded-t-3xl top-0 left-0 backdrop-blur-md backdrop-brightness-[70%]">
        <h3 className="font-medium text:sm sm:text-base md:text-lg text-center">
          {title}
        </h3>
        <p className="text-slate-300 text-xs  mt-1 line-clamp-4">
          {description}
        </p>
        <p className="mt-1 bg-blue-900 text-xs sm:text-sm text-center py-1 rounded-full">
          <span className="font-medium">Tools</span>: {tools}
        </p>
      </div>

      <div className="flex flex-row-reverse justify-center gap-2 items-center py-1 bg-white">
        <a
          href={repoLink}
          target="_blank"
          className="text-xl text-blue-900 text-center px-4 py-2 hover:text-blue-800"
          title="Go to github"
        >
          <FaGithub />
        </a>
        <a
          href={link}
          target="_blank"
          className="text-lg  text-blue-900 px-4 py-2 hover:text-blue-800"
          title="Go to page"
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      {/* <div className="w-full h-full bg-green-500 z-30"></div> */}
    </div>
  );
};

export default Project;
