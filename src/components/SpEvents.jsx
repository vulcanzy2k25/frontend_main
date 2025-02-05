import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sand from "../assets/images/nightEvents/sandart.jpg";
import ls from '../assets/images/nightEvents/ls.png'
import dj from '../assets/images/nightEvents/dj.jpg'
import mbb from '../assets/images/nightEvents/mbb.png'
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
        start: "top 0%",
        end: "top -300%",
        pin: true,
        // markers: true,
        scrub: 0.5,
        anticipatePin: 1,
        snap: {
          snapTo: "labels", // Automatically snap to each label in the horizontal scroll
          duration: 0.1, // Duration of snapping (smooth scroll effect)
          delay: 0, // Delay before snapping
          ease: "power1.inOut", // Ease for the snapping effect
        },
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
  const spRef=useRef(null)

  return (
    <div className="" ref={spRef} id="spEvents">
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
            className=" box relative w-[200rem] h-[100vh] bg-orange-500 overflow-hidden font-bold text-[5rem] flex justify-center items-center"
          >
            <img
              src={sand}
              className="absolute opacity-70 top-0 h-full object-cover w-full"
              loading="lazy"
              alt=""
            />
            <p className="font-dune z-10 text-[12vw]  md:text-[10vw] font-extrabold text-white">
              SAND ART
            </p>
            <p className="absolute font-dune font-bold text-[5vw] md:text-[3vw] bottom-32 sm:bottom-3 text-white">
              Feb 6th
            </p>
          </div>

          {/* DJ Night Section */}
          <div
            style={{ width: windowWidth }}
            className="box relative overflow-hidden w-[200rem] h-[100vh] bg-[blue] font-bold text-[5rem] flex justify-center items-center"
          >
            <img
              src={ls}
              className="absolute opacity-70 top-0  object-cover h-full w-full"
              loading="lazy"
              alt=""
            />

            <p className="font-altroned text-[10vw] md:text-[10vw] z-10 font-extrabold text-white">
              LASER SHOW
            </p>
            <p className="absolute font-altroned font-bold text-[5vw] md:text-[3vw] bottom-32 sm:bottom-3 text-white">
              Feb 7th
            </p>
          </div>

          {/* Laser Show Section */}
          <div
            style={{ width: windowWidth }}
            className="box relative overflow-hidden w-[200rem] h-[100vh] bg-black font-bold text-[5rem] flex justify-center items-center text-white"
          >
            <img
              src={mbb}
              className="absolute  bottom-0 opacity-70 object-cover h-full w-full"
              loading="lazy"
              alt=""
            />
            <p className="font-exo text-[15vw] md:text-[12vw] z-10 font-extrabold text-white">
              Merakee Band
            </p>
            <p className="absolute font-exo font-bold text-[5vw] md:text-[3vw]  px-5 w-full text-center bottom-32  sm:bottom-3 text-white">
              Feb 8th
            </p>
          </div>

          {/* Band Section */}
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] relative overflow-hidden bg-black font-bold text-[5rem] flex justify-center items-center text-white"
          >
             <img
              src={dj}
              className="absolute opacity-80 top-0  object-cover h-full w-full"
              loading="lazy"
              alt=""
            />
            <p className="font-vorcas text-[12vw] md:text-[12vw] z-10 font-extrabold text-white">
              DJ NIGHT
            </p>
            <p className="absolute font-vorcas font-bold text-[5vw] md:text-[3vw] bottom-32 sm:bottom-3 text-white">
              Feb 8th
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
