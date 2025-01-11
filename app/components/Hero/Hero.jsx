import React from "react";

export const Hero = ({ title, heading1, heading2, heading3, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-8">
        <div className="w-20 bg-gray-500 h-0.5 mx-2" />
        <h1 className="text-red-500 text-3xl">{title}</h1>
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-4">
          <span>{heading1}</span>
          <span className="text-primary"> {heading2}</span>

          <span> {heading3}</span>
        </h1>
        <p className="text-2xl text-gray-500 mb-8">{description}</p>
      </div>
    </div>
  );
};
