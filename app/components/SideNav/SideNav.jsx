import { Groups, HomeIcon, Message, MyProfile, Notification } from "@/app/svgs";
import { Initials } from "..";
import Link from "next/link";

const NavLinks = [
  { id: 1, value: "Home", icon: <HomeIcon /> },
  { id: 2, value: "Notification", icon: <Notification /> },
  { id: 3, value: "Message", icon: <Message /> },
  { id: 4, value: "Groups", icon: <Groups /> },
  { id: 5, value: "My Profile", icon: <MyProfile /> },
];

export const SideNav = () => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <Initials
        profileImage="Profile.png"
        title={"Pratiksha"}
        description={"Teacher at Divim Technology"}
      />
      {NavLinks.map(({ id, value, icon }) => (
        <div key={id} className="flex items-center">
          <div className="mx-2">{icon}</div>
          <Link href="/Groups" className="text-2xl mx-2 my-4">
            {value}
          </Link>
        </div>
      ))}
    </div>
  );
};
