import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const first = useRef();
  const con = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useGSAP(() => {
    gsap.to(first.current, {
      scrollTrigger: {
        trigger: con.current,
        scroller: "body",
        start: "top -2%",
        end: "top -300%",
        pin: true,
        // markers: true,
        scrub: 0.5,
        anticipatePin: 1,
        snap: {
          snapTo: "labels", // Automatically snap to each label in the horizontal scroll
          duration: 0.1, // Duration of snapping (smooth scroll effect)
          delay: 0, // Delay before snapping
          ease: "power1.inOut" // Ease for the snapping effect
        }
      },
      transform: `translateX(${-(3 * windowWidth)}px)`,
      delay: 1,
    });
  }, [windowWidth]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div className="">
      <div
        ref={con}
        className="bg-slate-200 overflow-x-hidden h-[100vh] flex-row"
      >
        <div
          ref={first}
          style={{ width: 4 * windowWidth }}
          className="grid grid-cols-4 h-[100vh] "
        >
          {/* Sand Art Section */}
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-orange-500 font-bold text-[5rem] flex justify-center items-center"
          >
            <p className="font-exo text-[15vw] md:text-[12vw] font-extrabold text-white">Sand Art</p>
            <p className="absolute font-exo font-bold text-[5vw] md:text-[3vw] bottom-16 sm:bottom-3 text-white">Feb 6th</p>
          </div>

          {/* DJ Night Section */}
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-orange-500 font-bold text-[5rem] flex justify-center items-center"
          >
           <p className="font-exo text-[15vw] md:text-[12vw] font-extrabold text-white">Sand Art</p>
            <p className="absolute font-exo font-bold text-[5vw] md:text-[3vw] bottom-16 sm:bottom-3 text-white">Feb 6th</p>
           </div>

          {/* Laser Show Section */}
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-purple-700 font-bold text-[5rem] flex justify-center items-center text-white"
          >
           <p className="font-exo text-[15vw] md:text-[12vw] font-extrabold text-white">Sand Art</p>
            <p className="absolute font-exo font-bold text-[5vw] md:text-[3vw] bottom-16 sm:bottom-3 text-white">Feb 6th</p>
           </div>

          {/* Band Section */}
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-red-500 font-bold text-[5rem] flex justify-center items-center text-white"
          >
           <p className="font-exo text-[15vw] md:text-[12vw] font-extrabold text-white">Sand Art</p>
            <p className="absolute font-exo font-bold text-[5vw] md:text-[3vw] bottom-16 sm:bottom-3 text-white">Feb 6th</p>
           </div>
        </div>
      </div>
    </div>
  );
}
