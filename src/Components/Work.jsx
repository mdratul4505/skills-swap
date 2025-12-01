import React, { useEffect } from "react";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="my-15 md:my-20 lg:my-25">
      <div className=" mb-15 text-center space-y-4">
        <h1
          data-aos="fade-right"
          className="text-3xl  md:text-4xl lg:text-5xl font-bold "
        >
          How It Works
        </h1>
        <p data-aos="fade-left" className="text-gray-500 text-xl">
          Get started in three simple steps
        </p>
      </div>
      <section className=" bg-white container mx-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div
              data-aos="fade-right"
              className="flex flex-col items-center space-y-4"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Browse Skills</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Explore hundreds of skills offered by talented individuals.
              </p>
            </div>

            <div
              data-aos="fade-right"
              className="flex flex-col items-center space-y-4"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Find the perfect instructor for your learning goals.
              </p>
            </div>

            <div
              data-aos="fade-right"
              className="flex flex-col items-center space-y-4"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Learn</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Start your learning journey with personalized sessions.
              </p>
            </div>

            <div
              data-aos="fade-right"
              className="flex flex-col items-center space-y-4"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Grow</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Master new skills and share your own expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
