import React, { useEffect, useState } from "react";
import { getRegisteredEvents } from "../services/operations/userAPI";
import EventCard from "../components/EventCard";
import star from "../assets/images/Star.png";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
export default function RegEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchRegisteredEvents() {
      if (!token) return;
      const events = await getRegisteredEvents(token);
      setRegisteredEvents(events);
      setLoading(false);
    }
    fetchRegisteredEvents();
  }, [token]);

  return (
    <div className="gap-5 pb-20 sm:pb-5 sm:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen flex flex-col p-5 items-center">
      <button className="absolute text-title top-5 left-5">
        <TiArrowBack onClick={() => navigate("/profile")} size={45} />{" "}
      </button>
      {/* Page Title */}
      <img src={star} className="w-7 sm:w-10" alt="Star Icon" />
      <p className="font-header text-title text-2xl sm:text-4xl">
        Registered Events
      </p>

      {loading ? (
        <p className="text-white">Loading registered events...</p>
      ) : registeredEvents.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-4 max-w-5xl sm:pl-16">
          {registeredEvents.map((event, index) => (
            <div key={index} className="break-inside-avoid flex justify-center">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No registered events found.</p>
      )}
    </div>
  );
}
