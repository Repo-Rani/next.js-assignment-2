import React from "react";
import { countriesInfo } from "../../type/type";

const Card = ({ name, population, capital }: countriesInfo) => {
  return (
    <div className="bg-white text-blue-900 rounded-lg p-8 max-w-lg w-full space-y-6">
      <p className="text-2xl font-semibold">
        <span className="text-purple-700">Name:</span>
        {name}
      </p>
      <p className="text-2xl font-semibold">
        <span className="text-purple-700">Population:</span>
        {population}
      </p>
      <p className="text-2xl font-semibold">
        <span className="text-purple-700">Capital:</span>
        {capital}
      </p>
    </div>
  );
};

export default Card;
