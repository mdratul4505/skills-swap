import React, { use, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvaider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";


const EditProfile = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      offset:100,
      
      delay: 100,

    })
     AOS.refresh();
  },[])

  const { user, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
       
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div data-aos="flip-right" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">My Profile</h2>

        
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src={photo }
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-md mx-auto object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-lg -z-10"></div>
        </div>

      
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
            <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Profile Photo URL
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              name="photo"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full py-3 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;