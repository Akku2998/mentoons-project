import React from "react";
import Image from "next/image";

export const BirthdayCard = () => {
  return (
    <div className="divide-y bg-white pb-12 my-12 rounded-2xl shadow-md birthdayCardBackground">
      <h1 className="p-4">Birthday of the Week!</h1>
      <div className="flex flex-col items-center mb-4">
        <img
          className="mt-4"
          src="birthdaySticker.png"
          alt="birthday sticker"
        />
        <div className="relative mt-12">
          <Image
            src="/birthdayCap.png"
            height={100}
            width={100}
            className="absolute bottom-2/3 left-16"
            alt="birthday cap"
          />
          <img src="birthdayBoy.png" alt="birthday boy" />
        </div>
        <h2 className="font-semibold">Name of the person</h2>
        <p className="text-sm">Age: 12</p>
      </div>
    </div>
  );
};
