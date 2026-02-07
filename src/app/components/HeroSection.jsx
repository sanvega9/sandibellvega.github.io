"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Footer from "@/components/Footer";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center sm:text-left">
          <h1 className="text-[#F0A8D0] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">
              Hello I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sandibell Vega",
                1000,
                "Artificial Intelligence",
                1000,
                "Robotics and Embedded Systems",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-white text-lg lg:text-xl">
            Hello! I'm Sandibell Vega, a dedicated technologist with a deep passion for innovation and a commitment to improving lives through technology. 
            I hold dual Bachelor of Science degrees in Artificial Intelligence, Robotics, and Embedded Systems from the University of Advancing Technology, class of 2021.
            My academic experience was enriched by a disciplined approach to learning, where I consistently documented my insights and breakthroughs. This reflective practice has shaped my ability to innovate and adapt in the rapidly evolving tech landscape. My work is driven by a passion for pushing the limits of technology to create meaningful and impactful solutions.
          </p>

        </div>

      </div>



      <div className="mt-8 lg:mt-12 flex justify-center">
        <h3 className="text-[#F0A8D0] mb-4 text-4xl lg:text-6xl font-extrabold">Recent Project</h3>
      </div>

      <div className="mt-8 lg:mt-12 flex justify-center">
        <div className="relative w-full max-w-[680px] md:max-w-[570px]" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Dog927xBQjg?si=YID7c5HSaFJn5C_N"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* New Section Below the Video */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-[680px] md:max-w-[570px]" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/A_GdFHpMQ7k?si=68GmDHr9yt-o553j"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
       <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-[680px] md:max-w-[570px]" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/wRIXku35z7M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
       </div>
     {/* Contact Section */}
    <div className="relative text-center py-20 mt-20">
  
  {/* Glow background */}
     <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-72 h-72 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-3xl rounded-full"></div>
    </div>

  <h2 className="relative text-4xl font-extrabold mb-4 text-amber-400">
    Get in Touch ✨
  </h2>

  <p className="relative text-lg text-gray-300 mb-10 max-w-xl mx-auto">
    I’m always open to new opportunities, collaborations, and creative tech projects.
    Let’s build something meaningful together.
  </p>
  
  <div className="relative max-w-sm mx-auto bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl 
                  transform transition duration-300 hover:scale-105 hover:shadow-pink-500/20">
    
    <h3 className="text-2xl font-bold text-white mb-1">
      Sandibell Vega
    </h3>
    <p className="text-gray-400 mb-4">
      AI & Robotics Engineer
    </p>

    <p className="text-gray-300 mb-6 flex justify-center items-center gap-2">
      📧 <span>bellvega1@gmail.com</span>
    </p>

    <a
      href="mailto:bellvega1@gmail.com"
      className="block w-full text-center py-3 rounded-full 
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                 hover:opacity-90 transition-all text-white font-semibold tracking-wide"
    >
      Email Me
    </a>
  </div>
</div>
<Footer/>
    
  );
};

export default HeroSection;













