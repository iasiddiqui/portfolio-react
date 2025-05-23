import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Marquee = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#marquee", {
      scrollTrigger: {
        trigger: "#marquee",
        // scrub: true,
      },
      x: "-100%",
      // y: "100%",
      // height: "100%",
      delay: 0.5,
      duration: 2,
    });
  });
  return (
    <div
      id="marquee"
      className="overflow-x-hidden bg-gradient-to-r from-cyan-500 to-blue-500 py-10"
    >
      <div className="marquee_title w-[89%] py-8 border-t-[1px] border-b-[1px] border-[#b8cdd4]">
        <h1 className="text-[7.5vw]  text-[#eaf8fd] text-center leading-none ">
          I'm a Frontend Developer
        </h1>
        <p className="text-center text-[#eaf8fd9a]">
          A Frontend Developer crafts seamless, interactive, and visually
          stunning web experiences using HTML, CSS, JavaScript, and modern
          frameworks like React. They bridge the gap between design and
          functionality, ensuring speed, responsiveness, and user engagement
          across all devices.
        </p>
      </div>
    </div>
  );
};

// initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 5, repeat: Infinity,}}

export default Marquee;
