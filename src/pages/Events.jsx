import React, { useEffect, useState, useCallback } from "react";
import { fetchEvents } from "../services/operations/userAPI";
import star from "../assets/images/Star.png";
import EventCard from "../components/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEvents = useCallback(async () => {
    const eventData = await fetchEvents();
    setEvents(eventData);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]); 

  return (
    <div className="gap-5 pb-20 sm:pb-0 sm:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen max-h-max flex flex-col p-5 items-center">
      <img src={star} className="w-7 sm:w-10" alt="Star Icon" />
      <p className="font-header text-title text-2xl sm:text-4xl">Magical Events</p>

      {loading ? (
        <p className="text-white">Loading events...</p>
      ) : events.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-center items-center w-full">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      ) : (
        <p className="text-white">No events found.</p>
      )}
    </div>
  );
}
