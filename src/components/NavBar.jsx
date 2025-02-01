import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsCalendar3EventFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa6";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
export default function NavBar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <GoHomeFill size={30} /> },
    { name: "Events", path: "/events", icon: <BsCalendar3EventFill size={30} /> },
    { name: "Stay", path: "/stay", icon: <FaBed size={30} /> },
    { name: "Gallery", path: "/gallery", icon: <MdPhotoSizeSelectActual size={30} /> },
    { name: "Sponsors", path: "/sponsors", icon: <FaHandshakeAngle size={30} /> },
    { name: "Team", path: "/team", icon: <HiUserGroup size={30} /> },
    { name: "Profile", path: "/profile", icon: <FaUser size={30} /> },
  ];

  return (
    <div className="h-screen w-3 flex items-center fixed z-10">  

    <div className="fixed z-10 bottom-0 sm:bottom-auto sm:left-10 bg-black flex sm:flex-col items-center justify-around w-full p-1 sm:p0 sm:w-[4rem] sm:h-[30rem] rounded-xl ">
      {navItems.map((item, index) => (
        <Link to={item.path} key={index} className="w-full">
          <li
            className={`flex flex-col items-center justify-center scale-90 sm:scale-100 w-full ${
              location.pathname === item.path ? "text-title" : "text-white"
            }`}
            >
            {item.icon}
            <p className="font-syne text-[0.8rem]">{item.name}</p>
          </li>
        </Link>
      ))}
    </div>
      </div>
  );
}
