import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-home bg-cover bg-center min-h-[40rem]  flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-[1px]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-8">
        {/* Hero Title */}
        <h1 className="title font-title tracking-[18%] sm:tracking-[6%] text-title text-4xl sm:text-6xl md:text-7xl drop-shadow-xl shadow-orange-700">
          VULCANZY’25
        </h1>

        {/* Subheading */}
        <p className="mt-4 font-exo font-bold text-lg sm:text-2xl text-title max-w-2xl drop-shadow-md">
          VELORA : VEIL OF ETERNAL LIGHT
        </p>
      <div>
        <Link to="/login">
        <button className="text-xl text-black bg-title p-1 rounded-2xl font-syne px-5  mt-10">
          Register
        </button>
        </Link>
      </div>
      </div>
    </div>
  );
}
