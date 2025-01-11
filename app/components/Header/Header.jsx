"use client";

import { Button } from "..";
import { Call, Date, Plans, Store } from "@/app/svgs";

const headerLink = [
  { id: 1, value: "Join Us" },
  { id: 2, value: "Store", icon: <Store /> },
  { id: 3, value: "Plans", icon: <Plans /> },
];
export const Header = () => {
  return (
    <header className="z-10 sticky top-0">
      <nav className="bg-primary flex justify-between w-full h-24 drop-shadow-2xl">
        <div className="flex mx-4 items-center justify-between w-1/2">
          <Button
            className="rounded-full border-none bg-white text-xs py-1"
            label="09 December 2024"
            Icon={Date}
          />
          <Button
            className="rounded-full border-none bg-white text-xs py-1"
            label="Call us: +91 9036033300"
            Icon={Call}
          />
          {headerLink.map(({ id, value, icon }) => (
            <a key={id} className="flex items-center text-white gap-2" href="#">
              {icon} {value}
            </a>
          ))}
        </div>
        <div className="relative top-8 bg-primary rounded-full">
          <img src="mentoonsLogo.png" className="h-30" alt="mentoons Logo" />
        </div>
        <div className="mx-4 w-1/2">
          <div className="flex items-center justify-around h-full">
            {["Comics", "Podcasts", "Audio Comics"].map((value) => (
              <a key={value} className="text-white" href="#">
                {value}
              </a>
            ))}
            <img src="profileIcon.png" alt="profile icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};
