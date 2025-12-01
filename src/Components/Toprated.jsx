import React from "react";

const Toprated = () => {
  return (
    <div className="mt-15  md:mt-20 lg:mt-25   bg-purple-50 py-10 md:py-15 lg:py-20">
      <div className="mb-15 text-center space-y-4">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold ">Top Rated Providers</h1>
        <p className="text-gray-500 md:text-lg lg:text-xl">
          Learn from the best instructors in the community
        </p>
      </div>

      <div className="grid p-4 md:p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 lg:gap-6">
        <div className="card w-full  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
          <figure className="relative">
            <img
              src={
                "https://i.ibb.co/YFCB64st/istockphoto-2035796126-1024x1024.jpg"
              }
              alt="img"
              className="h-52 w-full object-cover rounded-t-2xl"
            />
            <div className="absolute top-2 right-2 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
              ${30}/hr
            </div>
          </figure>

          <div className="card-body">
            <h2 className="card-title">Spoken English Practice</h2>
            <p className="text-gray-500">Sara Hossain</p>

            <div className="flex items-center gap-2">
              <div className="text-yellow-400 flex">★★★★★</div>
              <p className="text-sm text-gray-500">(4.6)</p>
            </div>

            
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-full  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
          <figure className="relative">
            <img
              src={
                "https://i.ibb.co/GQD0sbrd/istockphoto-2158628373-1024x1024.jpg"
              }
              alt="img"
              className="h-52 w-full object-cover rounded-t-2xl"
            />
            <div className="absolute top-2 right-2 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
              ${25}/hr
            </div>
          </figure>

          <div className="card-body">
            <h2 className="card-title">Web Development Basics</h2>
            <p className="text-gray-500">John Doe</p>

            <div className="flex items-center gap-2">
              <div className="text-yellow-400 flex">★★★★★</div>
              <p className="text-sm text-gray-500">(4.8)</p>
            </div>

            
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-full  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
          <figure className="relative">
            <img
              src={
                "https://i.ibb.co/fGBZNXQ3/istockphoto-1060862036-1024x1024.jpg"
              }
              alt="img"
              className="h-52 w-full object-cover rounded-t-2xl"
            />
            <div className="absolute top-2 right-2 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
              ${20}/hr
            </div>
          </figure>

          <div className="card-body">
            <h2 className="card-title">Yoga Advanced</h2>
            <p className="text-gray-500">Rina Das</p>

            <div className="flex items-center gap-2">
              <div className="text-yellow-400 flex">★★★★★</div>
              <p className="text-sm text-gray-500">(4.2)</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toprated;
