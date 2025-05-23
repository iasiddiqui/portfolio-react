import gsap from "gsap";
import { useEffect, useRef } from "react";

const EyesMove = () => {
  const eyeRefLeft = useRef(null);
  const eyeRefRight = useRef(null);
  const handsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const eyes = [eyeRefLeft.current, eyeRefRight.current];

      eyes.forEach((eye) => {
        if (eye) {
          const { left, top, width, height } = eye.getBoundingClientRect();
          const eyeCenterX = left + width / 2;
          const eyeCenterY = top + height / 2;
          const deltaX = clientX - eyeCenterX;
          const deltaY = clientY - eyeCenterY;
          const angle = Math.atan2(deltaY, deltaX);
          const distance = Math.min(10, Math.hypot(deltaX, deltaY) / 10);

          gsap.to(eye, {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            duration: 0.2,
          });
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center relative">
        <div
          ref={eyeRefLeft}
          className="w-6 h-6 bg-white rounded-full flex items-center justify-center absolute left-[15%] top-1/2 transform -translate-y-1/2"
        >
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <div
          ref={eyeRefRight}
          className="w-6 h-6 bg-white rounded-full flex items-center justify-center absolute right-[15%] top-1/2 transform -translate-y-1/2"
        >
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
      </div>
      <div
        ref={handsRef}
        className="w-16 h-8 bg-gray-700 rounded-full mt-2"
      ></div>
    </section>
  );
};

export default EyesMove;
