import React, { use, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiCursedStar } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvaider";
import { toast, ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const { signIn, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginLoading) return;
    setLoginLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful ✅");

        navigate(location.state ? location.state : "/");
      })
      .catch((e) => {
        let friendlyMessage = "";

        switch (e.code) {
          case "auth/user-not-found":
            friendlyMessage = "No user found with this email.";
            break;
          case "auth/wrong-password":
            friendlyMessage = "Please provide the correct password.";
            break;
          case "auth/invalid-email":
            friendlyMessage = "Please enter a valid email address.";
            break;
          case "auth/too-many-requests":
            friendlyMessage = "Too many attempts. Please try again later.";
            break;
          case "auth/invalid-credential":
            friendlyMessage = "please provide current password";
            break;
          default:
            friendlyMessage = `${e.code}: ${e.message}`;
        }

        setError(friendlyMessage);
        toast.error(friendlyMessage);
      })
      .finally(() => setLoginLoading(false));
  };

  const handleGoogleLogin = () => {
    if (googleLoading) return;
    setGoogleLoading(true);

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google login successful ✅");
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setGoogleLoading(false));
  };

  const handleForgetPasswordRedirect = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-400 p-4">
      <div
        data-aos="zoom-in-down"
        className="bg-white rounded-3xl my-40 shadow-xl p-10 w-full max-w-md"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-400 w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl font-bold">
            <GiCursedStar />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">
          Welcome Back
        </h2>
        <p className="text-sm mt-2 text-gray-500 text-center mb-6">
          Sign in to your SkillSwap account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <label className="label text-black font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            required
            placeholder="Your@email"
            className="w-full text-gray-500 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="w-full text-gray-500 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10"
            />
            <span
              className="absolute right-3 text-gray-500 cursor-pointer flex items-center h-full"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="button"
            onClick={handleForgetPasswordRedirect}
            className="text-purple-600 text-right cursor-pointer hover:underline"
          >
            Forget Password?
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loginLoading}
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-400 hover:scale-104 ease-in-out transition flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loginLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full cursor-pointer py-3 rounded-lg border border-gray-300 bg-white flex justify-center items-center gap-2 hover:bg-gradient-to-b from-pink-400 to-purple-700 hover:text-white hover:font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle />
          {googleLoading ? "Loading..." : "Sign In with Google"}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Don't have an account?
          <Link
            to="/signup"
            className="text-purple-600 ml-1 font-medium cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>

      <ToastContainer position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
