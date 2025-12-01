import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="mb-6 lg:mb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className=" shadow-xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero min-h-[40vh] md:min-h-[50vh]  lg:min-h-[60vh] justify-center p-4 bg-gradient-to-br from-purple-600 to-pink-500">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl text-white font-bold"> Exchange Skills ✨</h1>
                <p className="py-6 text-white">
                  Connect with talented individuals in your area. Learn new
                  skills, teach what you know, and grow together.
                </p>
                <button className="btn btn-primary text-white">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero min-h-[40vh] md:min-h-[50vh]  lg:min-h-[60vh]  bg-gradient-to-r from-purple-400 to-blue-500 text-white">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Swap Your Skills 💡</h1>
                <p className="py-6">
                  Learn new skills and teach others. Connect with people through
                  Skill Swap!
                </p>
                <button className="btn btn-accent text-white">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="hero min-h-[40vh] md:min-h-[50vh]  lg:min-h-[60vh]  bg-gradient-to-r from-green-400 to-teal-500 text-white">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Learn, Teach, Grow 🌱</h1>
                <p className="py-6">
                  A community of learners helping each other. Join Skill Swap
                  today!
                </p>
                <button className="btn btn-secondary text-white">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;



