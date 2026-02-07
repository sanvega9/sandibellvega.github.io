"use client";

import { FaTiktok, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white z-50">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
          <path
            d="M0,64 C120,96 240,32 360,48 480,64 600,112 720,96
               840,80 960,32 1080,40 1200,48 1320,96 1440,80
               L1440,0 L0,0 Z"
            fill="#fbc2d9"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Have questions about technology or coding? Don’t hesitate to reach out!
          <span className="font-semibold text-pink-300"> AI Bell Vega </span>
          is here to support you every step of the way.
        </p>

        <div className="flex justify-center gap-6 text-3xl mb-8">
          <FaTiktok className="hover:text-pink-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          <FaYoutube className="hover:text-pink-400 cursor-pointer" />
          <FaLinkedin className="hover:text-pink-400 cursor-pointer" />
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} by AI Bell Vega
        </p>
      </div>
    </footer>
  );
}

