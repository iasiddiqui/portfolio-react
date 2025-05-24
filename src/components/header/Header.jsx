import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { handleCall, handleEmail } from "../../utils/handleContact";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";
import BigScreenSocialLink from "./BigScreenSocialLink";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  useGSAP(() => {
    gsap.from(".title", {
      opacity: 0,
      delay: 0.7,
      x: 20,
    });
  });

  useGSAP(() => {
    gsap.from(".other_link", {
      opacity: 0,
      delay: 0.7,
      x: 20,
    });
  });

  const toggleNav = (toggle) => {
    if (toggle === "show") setIsToggle(true);
    else setIsToggle(false);
  };

  return (
    <header
      id="#home"
      className="fixed w-full z-50 top-0 left-0 transition-all duration-300 bg-white"
    >
      <div
        className="text-sm sm:text-base lg:text-lg py-2 flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-5 md:justify-end md:pr-20 md:p-3"
        style={{ backgroundColor: "#2d3748", color: "#e2e8f0" }}
      >
        <button
          onClick={handleEmail}
          className="sm:border-r-2 sm:border-slate-500 sm:pr-5 text-slate-300 hover:text-slate-200"
        >
          ishansiddiqui011@gmail.com
        </button>
        <h2 className="sm:border-r-2 sm:border-slate-500 sm:pr-5">
          Call me:{" "}
          <button
            onClick={handleCall}
            className="text-blue-500 hover:text-blue-400"
          >
            +917254030390
          </button>
        </h2>
        <BigScreenSocialLink linkAnimate="other_link" />
      </div>

      <div className="relative flex justify-between px-10 md:px-20">
        <div id="icons" className="absolute top-[9%] right-14 sm:hidden">
          <button
            className={`text-xl absolute p-2 ${isToggle ? "hidden" : "inline-block"}`}
            onClick={() => toggleNav("show")}
          >
            <FaBarsStaggered />
          </button>
          <button
            className={`text-xl absolute p-2 ${isToggle ? "inline-block" : "hidden"}`}
            onClick={() => toggleNav("hide")}
          >
            <IoMdClose />
          </button>
        </div>

        {/* <div id="logo" className="py-3">
          <h2 className="text-lg lg:text-3xl font-bold lg:fixed bg-white lg:top-0 lg:w-[100px] lg:h-[50px] lg:shadow-md flex justify-center items-center">
            <span className="text-blue-500">Ishan</span><span className="title"></span>
          </h2>
        </div> */}

        <div id="logo" className="py-3">
          <a href="#home">
            <img
              src="/logo/logo.png"
              alt="Ishan Logo"
              className="h-10 w-auto lg:fixed bg-white lg:top-0 lg:w-[100px] lg:h-[50px]"
            />
          </a>
        </div>

        <Navbar isToggle={isToggle} />
      </div>
    </header>
  );
};

export default Header;
