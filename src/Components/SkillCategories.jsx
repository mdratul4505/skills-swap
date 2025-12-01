import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCategories = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="py-10 md:py-13 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 md:mb-10 lg:mb-15 text-center space-y-4">
          <h1
            data-aos="fade-right"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Skill Categories
          </h1>
          <p
            data-aos="fade-left"
            className="text-gray-500 md:text-lg lg:text-xl"
          >
            Explore skills across diverse categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <div
            data-aos="fade-right"
            className="flex bg-gradient-to-r from-purple-600 to-pink-500 flex-col items-center p-8 shadow-lg rounded-2xl text-white"
          >
            🎵
            <h3 className="text-xl font-semibold">Music</h3>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex bg-gradient-to-r from-blue-600 to-cyan-400 flex-col items-center p-8 shadow-lg rounded-2xl text-white"
          >
            🌍
            <h3 className="text-xl font-semibold">Language</h3>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex bg-gradient-to-r from-pink-600 to-sky-500 flex-col items-center p-8 shadow-lg rounded-2xl text-white"
          >
            💻
            <h3 className="text-xl font-semibold">Coding</h3>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex bg-gradient-to-r from-green-600 to-cyan-800 flex-col items-center p-8 shadow-lg rounded-2xl text-white"
          >
            🏋️‍♂️
            <h3 className="text-xl font-semibold">Fitness</h3>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex bg-gradient-to-t from-pink-600 to-cyan-800 flex-col items-center p-8 shadow-lg rounded-2xl text-white"
          >
            🎨
            <h3 className="text-xl font-semibold">Creative</h3>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="flex bg-gradient-to-t from-cyan-800 to-pink-600 flex-col items-center p-8 shadow-lg rounded-2xl text-white"
          >
            🍳
            <h3 className="text-xl font-semibold">Cooking</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCategories;
