import { Vector } from "@/app/svgs";
import React from "react";

export const DiscussionForum = () => {
  return (
    <div className="text-center bg-white px-4 py-2 rounded-2xl shadow-md">
      <div className="flex items-center mb-4 gap-2">
        <img src="naughtyFace.png" alt="naughty face" />
        <h1>Meme of theDay!</h1>
      </div>
      <img
        src="HeadacheFrame.png"
        alt="Headache frame"
        height="100%"
        width="100%"
      />
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      </p>
      <div className="flex flex-1 justify-end">
        <Vector />
      </div>
    </div>
  );
};
