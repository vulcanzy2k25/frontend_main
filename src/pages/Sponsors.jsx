import React from "react";
import star from "../assets/images/Star.png";
import { sponsor } from "../utils/sponsors";
export default function Sponsors() {
  return (
    <div className="gap-5 pb-20 sm:pb-5 sm:pl-40 cd:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen max-h-max flex flex-col p-5 items-center">
      <img src={star} className="w-7 sm:w-10" alt="" />
      <p className="font-header text-title text-2xl sm:text-4xl">Sponsors</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 justify-center justify-items-center mt-6 items-center w-full text-center">
{/* <div className="p-2 sm:pt-10 bg-gradient-to-tr from-purpleMain via-purpleHighlight to-[#200640] flex flex-col  items-center h-screen min-h-[20rem] w-full text-center"> */}
      {
        sponsor.map((item, index) => {
          return (
            <img key={index} src={item.image} alt="sponsor" className="sponsor-image h-16 sm:h-20 w-auto my-4" />
          )
        })
}
        </div>
    </div>
  );
}
