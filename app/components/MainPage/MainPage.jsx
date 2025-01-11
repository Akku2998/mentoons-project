"use client";

import { WhatsOnMindCard, Postcard } from "..";

export const MainPage = () => {
  return (
    <div className="col-span-5">
      <WhatsOnMindCard />
      <Postcard
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        image="postImage.png"
      />
      <Postcard description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
      <Postcard
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        image="postImage.png"
      />
    </div>
  );
};
