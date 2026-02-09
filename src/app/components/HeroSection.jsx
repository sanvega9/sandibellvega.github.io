"use client";
import React from "react";
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
                "Coding Educator",
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
            I hold dual B.S. degrees in Artificial Intelligence, Robotics, and Embedded Systems from the University of Advancing Technology (Class of 2021).
            I have hands-on experience designing, building, and implementing solutions in AI, robotics, and embedded systems. 
            Through practical projects, I have honed my ability to solve complex problems, innovate under constraints, and adapt to emerging technologies.
            
          </p>

        </div>

      </div>
      {/* Section Title */}
      {/* Section Title */}
<div className="mt-12 lg:mt-16 flex justify-center">
  <h3 className="text-[#F0A8D0] mb-8 text-4xl lg:text-6xl font-extrabold tracking-wide">
    Recent Project
  </h3>
</div>
      {/* Video Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-10 px-4 place-items-center mt-14">

  {/* Card 1 */}
  <div className="group relative w-full max-w-xl rounded-3xl overflow-hidden
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-xl transition-all duration-500
                  hover:-translate-y-2 hover:shadow-pink-500/30">

    {/* Glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                    opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

    {/* Video */}
    <div className="relative aspect-video">
      <iframe
        className="absolute inset-0 w-full h-full rounded-3xl"
        src="https://www.youtube.com/embed/Dog927xBQjg"
        title="K-Drama AI Recommender"
        allowFullScreen
      />
    </div>

    {/* Content */}
    <div className="relative p-5 text-center space-y-3">

      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide
                       rounded-full bg-gradient-to-r from-pink-500 to-purple-500
                       text-white shadow-md">
        AI Project
      </span>

      <h4 className="text-white font-extrabold text-xl">
        K-Drama AI Recommender
      </h4>

      <div className="w-12 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />

      <p className="text-gray-300 text-sm leading-relaxed">
        An intelligent recommendation system that suggests K-Dramas
        using user preferences and machine learning.
      </p>

      <div className="flex justify-center gap-2 flex-wrap pt-2">
        <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-pink-300">Python</span>
        <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-purple-300">ML</span>
        <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-blue-300">AI</span>
      </div>

    </div>
  </div>

  {/* Card 2 */}
  <div className="group relative w-full max-w-xl rounded-3xl overflow-hidden
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-xl transition-all duration-500
                  hover:-translate-y-2 hover:shadow-pink-500/30">

    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                    opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

    <div className="relative aspect-video">
      <iframe
        className="absolute inset-0 w-full h-full rounded-3xl"
        src="https://www.youtube.com/embed/A_GdFHpMQ7k"
        title="K-POP Fan App"
        allowFullScreen
      />
    </div>

    <div className="relative p-5 text-center space-y-2">
      <span className="inline-block px-3 py-1 text-xs rounded-full
                       bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        Mobile App
      </span>
      <h4 className="text-white font-extrabold text-xl">K-POP Fan App</h4>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      <p className="text-gray-300 text-sm leading-relaxed">
  A React Native social platform for K-Pop and K-Drama fans to connect,
  share posts, explore idol news, and discover recommended accounts
  with similar interests.
</p>
<div className="flex justify-center gap-2 flex-wrap pt-2">
  <span className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-md">React Native</span>
  <span className="px-2 py-1 text-xs bg-white/10 text-purple-300 rounded-md">Social</span>
  <span className="px-2 py-1 text-xs bg-white/10 text-pink-300 rounded-md">UI/UX</span>
</div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group relative w-full max-w-xl rounded-3xl overflow-hidden
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-xl transition-all duration-500
                  hover:-translate-y-2 hover:shadow-pink-500/30">

    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                    opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

    <div className="relative aspect-video">
      <iframe
        className="absolute inset-0 w-full h-full rounded-3xl"
        src="https://www.youtube.com/embed/wRIXku35z7M"
        title="Covid-19 IFTTT Bot"
        allowFullScreen
      />
    </div>

    <div className="relative p-5 text-center space-y-2">
      <span className="inline-block px-3 py-1 text-xs rounded-full
                       bg-gradient-to-r from-green-500 to-teal-500 text-white">
        IoT Project
      </span>
      <h4 className="text-white font-extrabold text-xl">Covid-19 IFTTT Bot</h4>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-green-500 to-teal-500 rounded-full" />

      <p className="text-gray-300 text-sm leading-relaxed">
  An IoT-based social distancing system that detects motion and alerts users
  via chatbot message or call when someone gets too close, using M5StickC,
  a PIR sensor, and Arduino.
</p>
     <div className="flex justify-center gap-2 flex-wrap pt-2">
    <span className="px-2 py-1 text-xs bg-white/10 text-green-300 rounded-md">Arduino</span>
    <span className="px-2 py-1 text-xs bg-white/10 text-teal-300 rounded-md">IoT</span>
    <span className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-md">Sensors</span>
  </div>  

    </div>
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
</section>
  );
};

export default HeroSection;




































