"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

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
        <div className="relative w-full max-w-[680px] md:max-w[560px]" style={{ aspectRatio: '16 / 9' }}>
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
        <div className="relative w-full max-w-[680px] md:max-w[560px]" style={{ aspectRatio: '16 / 9' }}>
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
        <div className="relative w-full max-w-[680px] md:max-w[560px]" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/wRIXku35z7M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          />
        </div>
       </div>
    </section>
  );
};

export default HeroSection;






