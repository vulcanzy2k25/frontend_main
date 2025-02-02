import React from "react";
// import { Link } from "react-router-dom";
// import SpEvents from "../components/SpEvents";
import logo from '../assets/images/NITAP 1.svg'
export default function Home() {
  return (
    <>
    <div className="h-screen bg-home bg-cover bg-center min-h-[40rem]  flex items-center justify-center pb- sm:pb-0 sm:pl-20   max-h-max ">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-[1px]"></div>
      <div className="flex absolute top-5  right-5 items-center gap-2 bg-black/50 p-2 rounded-xl backdrop-blur-sm"> 
        <img src={logo} alt="" className="w-[2.5rem] sm:w-[4.5rem]"/>
      
        <div className="text-gray-200 p-2 border-l-2 border-gray-100 font-exo font-medium text-sm sm:text-lg">
          <p>National Institute of Technology</p>
          <p>Andhra Pradesh</p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-8">
        {/* Hero Title */}
        <h1 className="title font-title tracking-[18%] sm:tracking-[6%] text-title text-4xl sm:text-6xl md:text-7xl drop-shadow-xl shadow-orange-700">
          VULCANZY’25
        </h1>

        {/* Subheading */}
        <p className="mt-4 font-exo font-bold text-lg sm:text-2xl text-title max-w-2xl drop-shadow-md">
          VELORA : VEIL OF ETERNAL LIGHT
        </p>
      {/* <div className="absolute -bottom-[2rem]">
        <Link to="/login">
        <button className="text-xl text-black bg-title p-1 rounded-2xl font-syne px-5  mt-10">
          Register
        </button>
        </Link>
      </div> */}
      </div>
     
    </div>
{/* <SpEvents/> */}
    </>
  );
}
