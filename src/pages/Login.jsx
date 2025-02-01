import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/images/Star.png";
import GoogleLoginButton from "../components/GoogleLoginButton "
import { IoCloseOutline } from "react-icons/io5";
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="h-screen bg-home bg-cover bg-center min-h-[40rem]  flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-[1px]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-8">
        {/* Hero Title */}
        <h1 className="title font-title tracking-[18%] sm:tracking-[6%] text-title text-4xl sm:text-6xl md:text-7xl drop-shadow-xl shadow-orange-700">
          VULCANZY’25
        </h1>

        {/* Subheading */}
        <p className="mt-4 font-exo font-bold text-lg sm:text-2xl text-title max-w-2xl drop-shadow-md">
          VELORA : VEIL OF ETERNAL LIGHT
        </p>

        <div className="rounded-xl flex text-white flex-col justify-around items-center backdrop-blur-md bg-gradient-to-br from-[#000000]/70 to-[#120226]/80 p-4   sm:w-[30rem]  h-[15rem] mt-10 absolute">
          <button>
            <IoCloseOutline
              onClick={() => navigate("/")}
              size={30}
              className="absolute top-5 right-5 scale-75 sm:scale-100 text-"
            />
          </button>
          <img src={star} className="h-[1.3rem] sm:h-[2rem]" alt="" />
          <p className="text-title font-exo font-bold text-xl sm:text-2xl">
            Create account / Sign In
          </p>
         <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
