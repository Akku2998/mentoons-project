import { Bookmark, Forward, Like, Msg } from "@/app/svgs";
import React from "react";
import { Initials } from "..";

const footLinks = [
  { id: 1, value: "14", icon: <Like /> },
  { id: 2, value: "14", icon: <Msg /> },
  { id: 3, value: "52", icon: <Forward /> },
];

export const Postcard = ({ description, image }) => {
  return (
    <div className="bg-white mt-4 p-4 drop-shadow-2xl">
      <div className="py-8">
        <Initials
          profileImage="Profile.png"
          title="Pratiksha"
          description="Teacher at Divim Technology"
          date="25 Nov at 12:24 PM"
        />
      </div>

      <p className="mb-4 text-gray-500">{description}</p>
      {image && <img src={image} alt="post image" width="100%" height="100%" />}

      <div className="flex items-center justify-start w-full py-6">
        {footLinks.map(({ id, value, icon }) => (
          <div
            key={id}
            className={`flex items-center mx-4 ${id === 3 && "flex-1"}`}
          >
            {icon} <span className="mx-4">{value}</span>
          </div>
        ))}
        <Bookmark />
      </div>
    </div>
  );
};
