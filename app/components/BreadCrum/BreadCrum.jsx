import { LeftArrow } from "@/app/svgs";
import React from "react";

export const BreadCrum = ({ path }) => {
  return (
    <div className="flex items-center gap-2 mb-12">
      <LeftArrow />
      <img src="home.png" alt="home arrow" />
      <h1 className="text-xl font-bold">/Mentoons-comics</h1>
      <h1 className="text-xl font-bold">
        {path === "/" ? "/Discussion Forum" : path}
      </h1>
    </div>
  );
};