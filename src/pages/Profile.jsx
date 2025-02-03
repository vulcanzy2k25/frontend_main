import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../services/operations/userAPI";
import star from "../assets/images/Star.png";
import toast from "react-hot-toast";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Authentication required!");
        navigate('/login');
        setLoading(false);
        return;
      }

      const userData = await getUser(token);
      if (userData) {
        setUser(userData);
      } else {
        toast.error("Failed to fetch user data.");
      }
      setLoading(false);
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="gap-5 pb-20 sm:pb-0 sm:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen h-screen flex flex-col p-5 items-center text-white justify-center">
      <div className="flex flex-col justify-center items-center">
        <img src={star} className="w-7 sm:w-10" alt="Star Icon" />
        <p className="font-header text-title text-2xl sm:text-4xl text-center">
          User Profile
        </p>
      </div>

      <div className="p-5 bg-gray-800/40 backdrop-blur-xl rounded-lg shadow-lg w-full flex flex-col gap-5 max-w-md text-white">
        {user?.avatar && (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        )}
        <p><strong>Name:</strong> {user?.name || "N/A"}</p>
        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
        <p><strong>College:</strong> {user?.college || "N/A"}</p>
        <p><strong>Year:</strong> {user?.year || "N/A"}</p>
        <p><strong>Registration No:</strong> {user?.reg_no || "N/A"}</p>

        <div className="flex flex-wrap justify-center gap-2">
          <Link to={"/updateProfile"}>
            <button className="bg-title w-[12rem] py-3 rounded-xl hover:bg-title/80">
              Update Profile
            </button>
          </Link>
          <button
            onClick={() => logout(navigate)}
            className="bg-orange-600 w-[12rem] py-3 rounded-xl hover:bg-orange-500"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
