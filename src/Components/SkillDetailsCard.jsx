import React from "react";
import { FaStar, FaClock, FaChartBar } from "react-icons/fa";
import AddToCardForm from "./AddToCardForm";

const SkillDetailsCard = ({ skill }) => {

  const { skillName, providerName, rating, description, price, image, category,} = skill;

  return (

   <div className="lg:flex  lg:justify-between">
     <div className="lg:w-2xl md:w-xl mx-auto  my-20  bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={image}
          alt={skillName}
          className="w-full h-70 object-cover rounded-t-2xl"
        />
       
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-purple-600 font-semibold text-sm px-3 py-1 rounded-full shadow-sm">
          ${price}/hr
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-gray-900">{skillName}</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white font-medium shadow-sm">
            {category}
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-700 font-medium">({rating})</span>
          </div>

          <div className="flex items-center gap-1">
            <FaClock className="text-gray-500" />
            <span>1 hour</span>
          </div>

          <div className="flex items-center gap-1">
            <FaChartBar className="text-gray-500" />
            <span>Beginner to Advanced</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Instructor:{" "}
            <span className="font-medium bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">{providerName}</span>
          </p>
        </div>
      </div>
    </div>
    <div className="my-20">
        <AddToCardForm skill ={skill}></AddToCardForm>
    </div>
   </div>
  );
};

export default SkillDetailsCard;
