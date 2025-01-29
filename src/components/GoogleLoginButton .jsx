import { signin } from '../services/operations/authAPI';

const GoogleLoginButton = () => {
  return (
    <button onClick={signin} className="sm:text-xl text-white w-[15rem] border-title border  p-1 rounded-2xl font-syne px-5 flex justify-center items-center gap-5 mt-10 py-3">
    Sign in with{" "}
    <img
      src="https://img.icons8.com/color/48/000000/google-logo.png"
      className="w-6 sm:w-10"
      alt="google"
    />
  </button>
  );
};

export default GoogleLoginButton;
