import React from "react";
import star from "../assets/images/Star.png";
import Carousal from "../components/Carousal";
import c1 from "../assets/images/gallery/c1-min.JPG";
import c1a from "../assets/images/gallery/c1a-min.JPG";
import c1b from "../assets/images/gallery/c1b-min.JPG";
import c1c from "../assets/images/gallery/c1c-min.JPG";
import c2 from "../assets/images/gallery/c2-min.JPG";
import c2a from "../assets/images/gallery/c2a-min.JPG";
import c2b from "../assets/images/gallery/c2b-min.JPG";
import c2c from "../assets/images/gallery/c2c-min.JPG";
import c3 from "../assets/images/gallery/c3-min.jpg";
import c3a from "../assets/images/gallery/c3a-min.jpg";
import c3b from "../assets/images/gallery/c3b-min.JPG";
import c3c from "../assets/images/gallery/c3c-min.JPG";
import c3d from "../assets/images/gallery/c3d-min.JPG";
import c3e from "../assets/images/gallery/c3e-min.JPG";
import c4 from "../assets/images/gallery/c4-min.JPG";
import c4a from "../assets/images/gallery/c4a-min.JPG";
import c4b from "../assets/images/gallery/c4b-min.JPG";
const images = [c1,c1a,c1b,c1c]; 
const images1=[c2,c2a,c2b,c2c]// Add more images as needed
const images2=[c3,c3a,c3b,c3c,c3d,c3e]// Add more images as needed
const images3=[c4,c4a,c4b]// Add more images as needed
export default function Gallery() {
  return (
    <div className="gap-5 pb-20 sm:pb-5 sm:pl-40 cd:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen max-h-max flex flex-col p-5 items-center">
      <img src={star} className="w-7 sm:w-10" alt="" />
      <p className="font-header text-title text-2xl sm:text-4xl">
        Magical Moments
      </p>
      <div className="grid gap-2 grid-cols-1 grid-rows-2 md:w-[55%] sm:w-[80%] ">
        <Carousal images={images} />

        <div className="grid gap-2 grid-cols-2">
          <Carousal images={images1} />
          <div className="grid gap-2 grid-rows-2">
            <Carousal images={images2} />
            <div className="grid gap-2 grid-cols-2">
              <Carousal images={images3} />
              <Carousal images={images1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
