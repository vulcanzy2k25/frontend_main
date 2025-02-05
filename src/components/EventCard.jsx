import React from "react";
import { FaRegCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { register } from "../services/operations/userAPI";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function EventCard({ _id, name, image, description, date, location }) {
  const handleRegister = async () => {
    const token = localStorage.getItem("token"); // Fetch token from localStorage  
    if (!token) {
      toast.error("Please log in to register for the event.");
      return;
    }
    await register(_id, token);
  };

  return (
    <div className="w-[18rem] h-max rounded-xl border border-title overflow-hidden shadow-lg">
      {/* Event Image */}
      <img src={image} className="rounded-t-xl w-full object-cover" alt="Event banner" />

      {/* Event Details */}
      <div className="p-4 flex flex-col gap-3">
        {/* Event Name */}
        <p className="text-title font-exo text-lg font-bold">{name}</p>

        {/* Description */}
        <p className="text-white text-sm leading-tight">
          {description.length > 60 ? `${description.substring(0, 40)}...` : description}
          <Link 
            to={'/event'} 
            state={{_id, name, image, description, date, location}} 
            className="text-title pl-2 cursor-pointer hover:underline">
            Read more
          </Link>
        </p>

        {/* Date & Location */}
        <div className="flex gap-2 justify-between items-center">
          <div className="bg-white flex rounded-lg px-3 py-2 gap-2 items-center">
            <FaRegCalendarAlt size={20} />
            <p className="font-medium text-xs">{date || "TBA"}</p>
          </div>
          <div className="bg-white flex rounded-lg px-3 py-2 gap-2 items-center">
            <GoLocation size={20} />
            <p className="font-medium text-xs">{location || "Unknown"}</p>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="bg-white font-medium py-2 flex justify-center rounded-lg text-lg gap-2 items-center hover:bg-gray-200 transition"
        >
          Register <FaExternalLinkAlt />
        </button>
      </div>
    </div>
  );
}
