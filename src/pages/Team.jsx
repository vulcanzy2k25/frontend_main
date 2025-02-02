import React from "react";
import star from "../assets/images/Star.png";
import { teamData } from "../utils/core";
import TeamSection from "../components/TeamSection";
export default function Team() {
  return (
    <div className="gap-5 pb-20 sm:pb-0 sm:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen max-h-max flex flex-col p-5 items-center">
      <img src={star} className="w-7 sm:w-10" alt="" />
      <p className="font-header text-title text-2xl sm:text-4xl">Core Team</p>
      <TeamSection title="Core Team" teamMembers={teamData.Core} />

    </div>
  );
}
