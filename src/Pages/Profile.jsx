import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvaider';
import { IoPencil } from 'react-icons/io5';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 100,
      easing: 'ease-in-sine',
      delay: 100,
    } )
  } , [])
    const {user} = use(AuthContext)
    return (
        <div  className="min-h-[80vh] overflow-x-hidden flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      <div data-aos="zoom-in-up" className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl text-center border border-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">My Profile</h2>

        <div className="relative w-50 h-32 mx-auto mb-4">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-32 h-32 mx-auto rounded-full border-4 border-purple-400 shadow-md"
          />
          <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-lg -z-10"></div>
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          {user?.displayName }
        </h3>
        <p className="text-gray-500 mb-6">
          {user?.email}
        </p>

        <Link to='/edit-profile' className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-102 transition">
          <IoPencil className='w-4 h-4' />
          Edit Profile
        </Link >
      </div>
    </div>
    );
};

export default Profile;