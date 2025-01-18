"use client";

import { Location } from "@/app/svgs";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className="text-black relative z-[10]"
      style={{
        backgroundImage: `linear-gradient(180deg, #FEB977 0%, #FF942E 100%)`,
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <img src="mentoonsFooter.png" alt="Mentoon Logo" />

          <div className="flex divide-x divide-black justify-center gap-2">
            <a href="#" className="font-bold hover:underline px-4">
              Home
            </a>
            <a href="#" className="font-bold hover:underline px-4">
              Comics
            </a>
            <a href="#" className="font-bold hover:underline px-4">
              Podcasts
            </a>
            <a href="#" className="font-bold hover:underline px-4">
              Workshops
            </a>
          </div>
          <div className="flex gap-2">
            <a href="#">
              <Image
                src="/Linkedin.png"
                height={45}
                width={45}
                alt="Linkedin"
              />
            </a>
            <a href="#">
              <Image
                src="/Facebook.png"
                height={45}
                width={45}
                alt="Facebook"
              />
            </a>
            <a href="#">
              <Image src="/Insta.png" height={45} width={45} alt="Insta" />
            </a>
            <a href="#">
              <Image src="/Youtube.png" height={45} width={45} alt="yooutube" />
            </a>
            <a href="#">
              <Image src="/Whtsp.png" height={45} width={45} alt="Whatsapp" />
            </a>
          </div>
        </div>

        <div className="flex justify-end gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg">About</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Mentoons
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Free Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help & FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mentoons Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Buy our Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Conversation Starter Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Re-Teller Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Silent Stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:metalmahesh@gmail.com"
                  className="hover:underline"
                >
                  📧 metalmahesh@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919036033300" className="hover:underline">
                  📞 +91 9036033300
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-80">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            />
            <button className="w-full bg-orange-500 text-white py-2 rounded-full font-bold">
              Subscribe to Newsletter
            </button>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2836653176187!2d77.63712627531943!3d12.953691687360065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155a60ecb7a1%3A0xac5bd734b84eb2b8!2sMentoons!5e0!3m2!1sen!2sus!4v1736579717122!5m2!1sen!2sus"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-40"
              ></iframe>
              <p className="flex mt-2 gap-2 text-sm">
                <Location /> Domlur, Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-8">
        <Image
          src="/activelistener.png"
          height={150}
          width={150}
          alt="Active Listener"
        />
        {/* <img src="activelistener.png" alt="Active Listener" /> */}
        <Image src="/toonland.png" height={120} width={120} alt="Toonland" />
        <Image src="/storyclub.png" height={120} width={120} alt="Story Club" />
        <Image
          src="/cxobranding.png"
          height={120}
          width={120}
          alt="CXO Branding"
        />
        <Image
          src="/propellingstory.png"
          height={120}
          width={120}
          alt="Propelling Stories"
        />
      </div>

      <img
        src="/footerImage.png"
        alt="footer image"
        className="absolute bottom-0 z-[-1]"
      />
    </footer>
  );
};
