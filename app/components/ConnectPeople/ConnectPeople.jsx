import { Button, Initials } from "..";
import { Connect } from "@/app/svgs";

export const ConnectPeople = () => {
  return (
    <div className="divide-y bg-white shadow-md">
      <h1 className="p-4">Connect with Parents Who Share Your Interests</h1>
      <div className="flex p-4 justify-between items-center">
        <Initials
          profileImage="profile1.png"
          title="Vishnu Kumar Agrawal"
          description="Single parent"
          date="25 Nov at 12:24 PM"
        />
        <Button
          className="text-primary text-sm rounded-md py-2 border-orange-300 bg-white"
          label="Connect"
        />
      </div>
      <div className="flex p-4 justify-between items-center">
        <Initials
          profileImage="profile2.png"
          title="Vishnu Kumar Agrawal"
          description="Single parent"
          date="25 Nov at 12:24 PM"
        />
        <Button
          className="text-primary text-sm rounded-md py-2 border-orange-300 bg-white"
          label="Connect"
        />
      </div>
      <div className="flex p-4 justify-between items-center">
        <Initials
          profileImage="profile3.png"
          title="Vishnu Kumar Agrawal"
          description="Single parent"
          date="25 Nov at 12:24 PM"
        />
        <Button
          className="text-primary text-sm rounded-md py-2 border-orange-300 bg-white"
          label="Connect"
        />
      </div>
      <div className="flex items-center justify-center p-2">
        <h2 className="text-primary m-1">View all recommendations</h2>
        <Connect />
      </div>
    </div>
  );
};
