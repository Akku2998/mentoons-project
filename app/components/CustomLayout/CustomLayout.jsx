"use client";

import { usePathname } from "next/navigation";
import {
  Footer,
  Header,
  BreadCrum,
  Hero,
  Search,
  SideNav,
  DiscussionForum,
  BirthdayCard,
  ConnectPeople,
} from "..";

export const CustomLayout = ({ children }) => {
  const pathname = usePathname();
  const isGroupPage = pathname === "/Groups";

  const heroProps = isGroupPage
    ? {
        title: "GROUPS & COMMUNITIES",
        heading1: "Explore Our",
        heading2: "Groups",
        description:
          "From parenting tips to mental health support, creative hobbies, and professional networking, there’s a group for everyone.",
      }
    : {
        title: "DISCUSSION FORUM",
        heading1: "POST,",
        heading2: "SHARE",
        heading3: "& CONNECT",
        description:
          " Our Discussion Forum is a welcoming space for parents and kids to,share, and learn from a diverse community of peers.",
      };

  return (
    <>
      <Header />
      <div className="my-16 mx-8">
        <div className="grid grid-cols-11 gap-8">
          <div className="col-span-7">
            <BreadCrum path={pathname} />
            <Hero {...heroProps} />
          </div>
          <div
            className={!isGroupPage ? "row-span-2 col-span-4" : "col-span-4"}
          >
            {!isGroupPage && (
              <>
                <Search />
                <DiscussionForum />
                <BirthdayCard />
                <ConnectPeople />
              </>
            )}
          </div>
          <div className="col-span-2">
            <SideNav />
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
