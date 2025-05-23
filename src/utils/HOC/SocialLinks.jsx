import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { linkedInLink, githubLink } from "../links";

const socialLink = [
  {
    icon: <FaLinkedinIn />,
    link: linkedInLink,
  },
  {
    icon: <FaGithub />,
    link: githubLink,
  },
];

const SocialLinks = ({ color, linkGap, myHover }) => {
  return (
    <ul className={`flex justify-center ${linkGap}`}>
      {socialLink.map((hyper, ind) => (
        <li key={ind}>
          <a
            href={hyper.link}
            className={`text-base md:text-lg lg:text-xl ${color && color} ${myHover && myHover}`}
          >
            {hyper.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
