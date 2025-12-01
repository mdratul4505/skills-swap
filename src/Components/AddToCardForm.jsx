import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaAddressBook } from "react-icons/fa";


const AddToCardForm = ({ skill }) => {

    const handelsubmit = (e) =>{
        e.preventDefault()
        toast.success('Booking request sent successfully!')
        
        e.target.reset();
    }


  const { price } = skill;
  return (
    <div className="flex justify-center items-start py-10 px-4">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Session</h2>

        <form onSubmit={handelsubmit}
         className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 text-gray-700 text-sm flex justify-between">
            <span>Duration: 1 hour</span>
            <span>Price: ${price}/hr</span>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-400 hover:opacity-90 transition"
          >
            <FaAddressBook />
            Request Booking
          </button>

          <p className="text-xs text-gray-500 text-center mt-2">
            You'll receive a confirmation email after the instructor accepts
            your request.
          </p>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AddToCardForm;
