import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    const {skillName ,providerName,image ,price ,rating , skillId } = data
    return (
        <div className="card w-full p-4  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
      <figure className="relative">
        <img
          src={image}
          alt={skillName}
          className="h-52 w-full object-cover rounded-t-2xl"
        />
        <div className="absolute top-2 right-2 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
          ${price}/hr
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{skillName}</h2>
        <p className="text-gray-500">{providerName}</p>

        <div className="flex items-center gap-2">
          <div className="text-yellow-400 flex">
            ★★★★★
          </div>
          <p className="text-sm text-gray-500">({rating})</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/card-details/${skillId}`} className="btn text-white font-semibold bg-gradient-to-r from-violet-500 to-purple-600 w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Card;