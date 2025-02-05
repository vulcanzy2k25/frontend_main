import React, { useEffect, useState, useCallback } from "react";
import { fetchEvents } from "../services/operations/userAPI";
import star from "../assets/images/Star.png";
import EventCard from "../components/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loadEvents = useCallback(async () => {
    const eventData = await fetchEvents();
    setEvents(eventData);
    setFilteredEvents(eventData);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Function to filter events based on search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(query) ||  // Filter by event name
      event.clubName.toLowerCase().includes(query) 
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="gap-5 pb-20 sm:pb-5 sm:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen flex flex-col p-5 items-center ">
      {/* Page Title */}
      <img src={star} className="w-7 sm:w-10" alt="Star Icon" />
      <p className="font-header text-title text-2xl sm:text-4xl">Magical Events</p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search events by name,clubName...."
        value={searchQuery}
        onChange={handleSearch}
        className="mt-4 w-full max-w-md p-2 rounded-lg border border-gray-500 bg-gray-900 text-white text-center"
      />

      {loading ? (
        <p className="text-white">Loading events...</p>
      ) : filteredEvents.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-4 max-w-5xl sm:pl-16">
          {filteredEvents.map((event, index) => (
            <div key={index} className="break-inside-avoid flex justify-center">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No events found.</p>
      )}
    </div>
  );
}
