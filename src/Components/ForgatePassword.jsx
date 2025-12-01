import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvaider";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");

  // Prefill email from login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email!");

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent ✅");
        // Open Gmail in new tab
        window.open("https://mail.google.com", "_blank");
        // Redirect back to login
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Reset Password
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default ForgetPassword;
