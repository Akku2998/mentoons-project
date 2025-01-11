import React from "react";
import { Initials } from "..";
import { Event, Photo, Video, WriteArticle } from "@/app/svgs";

const footLinks = [
  { id: 1, value: "Photo", icon: <Photo /> },
  { id: 2, value: "Video", icon: <Video /> },
  { id: 3, value: "Event", icon: <Event /> },
  { id: 4, value: "Write an Article", icon: <WriteArticle /> },
];

export const WhatsOnMindCard = () => {
  return (
    <div className="bg-white p-4 drop-shadow-2xl divide-y">
      <div className="py-8">
        <Initials profileImage="Profile.png" title={"What's on your mind?"} />
      </div>
      <div className="flex items-center w-full justify-between py-6">
        {footLinks.map(({ id, value, icon }) => (
          <div key={id} className="flex items-center">
            {icon} <span className="mx-4">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
