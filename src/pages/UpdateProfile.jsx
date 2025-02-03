import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser, getUser } from "../services/operations/userAPI";
import toast from "react-hot-toast";
import { TiArrowBack } from "react-icons/ti";
export default function UpdateProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    college: "",
    reg_no: "",
    year: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch user details on mount
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication required!");
        return;
      }

      const userData = await getUser(token);
      if (userData) {
        setUser({
          college: userData.college || "",
          reg_no: userData.reg_no || "",
          year: userData.year || "",
        });
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Authentication required!");
      setLoading(false);
      return;
    }

    await updateUser(user, token, navigate);
    setLoading(false);
  };

  return (
    <div className="flex flex-col relative justify-center items-center min-h-screen bg-gradient-to-b from-black to-[#120226] p-5">
      <button className="absolute text-title top-5 left-5">
        <TiArrowBack onClick={() => navigate("/profile")} size={45} />{" "}
      </button>
      <h1 className="text-3xl text-title font-header font-bold mb-4">
        Update Profile
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/40 backdrop-blur-xl p-5 rounded-lg shadow-lg w-full max-w-md"
      >
        <label className="text-white block mb-2">College Name</label>
        <input
          type="text"
          name="college"
          value={user.college}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          required
        />

        <label className="text-white block mb-2">Registration Number</label>
        <input
          type="text"
          name="reg_no"
          value={user.reg_no}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          required
        />

        <label className="text-white block mb-2">Year</label>
        <input
          type="number"
          name="year"
          value={user.year}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          min="1"
          max="5"
          required
        />

        <button
          type="submit"
          className="w-full p-2 mt-3 bg-title font-exo hover:bg-title/70 text-white font-bold rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
