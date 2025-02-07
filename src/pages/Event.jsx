import React from "react";
import { useLocation } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { register } from "../services/operations/userAPI";
import toast from "react-hot-toast";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function EventPage() {
    const navigate=useNavigate()
  const location = useLocation();
  const {
    _id,
    image,
    description,
    date,
    location: eventLocation,
  } = location.state || {};

  if (!_id) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Event not found.
      </div>
    );
  }
  const handleRegister = async () => {
    const token = localStorage.getItem("token"); // Fetch token from localStorage
    if (!token) {
      toast.error("Please log in to register for the event.");
      return;
    }
    await register(_id, token);
  };

  return (
    <div className="min-h-screen relative pb-5 bg-gradient-to-b from-black place-items-center to-[#120226] grid grid-cols-1 md:grid-cols-2 sm:pl-28 items-center text-white p-5">
      {/* Event Image */}
       <button className="absolute text-title top-5 left-5">
              <TiArrowBack onClick={() => navigate("/events")} size={45} />{" "}
            </button>
      <img
        src={image}
        alt="Event Banner"
        className=" w-[25rem] rounded-lg shadow-lg mb-5"
      />

      {/* Event Details */}
      <div className="max-w-3xl bg-gray-800/40 backdrop-blur-xl p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-3">Event Details</h1>

        <p className="text-lg leading-tight">{description}</p>

        {/* Date & Location */}
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex bg-white text-black rounded-lg px-3 py-2 gap-2 items-center">
            <FaRegCalendarAlt size={20} />
            <p className="font-medium text-sm">{date || "TBA"}</p>
          </div>
          <div className="flex bg-white text-black rounded-lg px-3 py-2 gap-2 items-center">
            <GoLocation size={20} />
            <p className="font-medium text-sm">{eventLocation || "Unknown"}</p>
          </div>
          <button
            onClick={handleRegister}
            className="bg-white text-black font-medium py-2 flex justify-center rounded-lg text-lg gap-2 w-full items-center hover:bg-gray-200 transition"
          >
            Register <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
