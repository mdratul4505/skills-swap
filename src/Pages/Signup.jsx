import React, { use, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiCursedStar } from "react-icons/gi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvaider";
import toast, { Toaster } from 'react-hot-toast';
import Aos from "aos";
import "aos/dist/aos.css";
const SignUpFormDesign = () => {


  useEffect(()=>{
      Aos.init({
        offset: 200,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 100,
      } )
    } , [])
  const { createUser, setUser, updateUser ,signInWithGoogle} = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

 const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("Google signup successful 🎉");
        console.log(user)
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelSignup = (e) => {



    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else setNameError("");

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Signup successful 🎉");

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });

      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-400 p-4">
      <div data-aos="zoom-in-down" className="bg-white rounded-3xl my-20 shadow-xl p-10 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-400 w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl font-bold">
            <GiCursedStar />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">
          Create Account
        </h2>
        <p className="text-sm mt-2 text-gray-500 text-center mb-6">
          Join SkillSwap and start learning today
        </p>

        <form  onSubmit={handelSignup} className="space-y-4">
          <label className="label text-black font-semibold text-lg">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-[#f9f6f3] text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {nameError && <p className="text-sm text-red-500">{nameError}</p>}

          <label className="label text-black font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your@email"
            className="w-full bg-[#f9f6f3] text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <label className="label text-black font-semibold text-lg">
            Your Photo
          </label>
          <input
            type="url"
            name="photo"
            required
            placeholder="Photo URL"
            className="w-full bg-[#f9f6f3] text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <div className="relative">
            <label className="label text-black font-semibold text-lg">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="w-full bg-[#f9f6f3] text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-400 hover:scale-95 ease-in-out transition flex justify-center items-center gap-2"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
        onClick={handleGoogleSignUp}
        className="w-full py-3 cursor-pointer rounded-lg border border-gray-300 bg-white flex justify-center items-center gap-2 hover:bg-gradient-to-b from-pink-400 to-purple-700 hover:text-white hover:font-semibold transition">
          <FcGoogle />
          Sign up with Google
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-purple-600 ml-1 font-medium cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignUpFormDesign;

