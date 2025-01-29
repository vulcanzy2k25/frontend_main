import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Authentication failed");
      navigate("/login");
    }
  }, [navigate]);

  return <div>Processing authentication...</div>;
};

export default OAuthCallback;
