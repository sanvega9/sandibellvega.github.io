"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Navbaricons from "../components/Navicons";
import Image from "next/image";
import background from "../image/background.jpg";
import kdrama from "../image/kdrama.png";
import Lung from "../image/Lung Cancer Detection.png";
import AIiot from "../image/AI IoT Garden.png";
import project4 from "../image/project4.png";
import kpop from "../image/ai bell Vega.gif";
import robotics from "../image/robotics.jpg";
import fake from "../image/project5.png";
import iot from "../image/iot1.jpg";
import processing from "../image/image processing.png";
import heart from "../image/heart disease.png";
import aispace from "../image/AI Space (2).gif";
import appmedication from "../image/production-studio.png";
import ai from "../image/AI.gif";
import chatbot from "../image/chatbot.png";
import kpopquiz from "../image/kpop quiz.png";
import tetris from "../image/tetris.png";
import tictactoe from "../image/tic-tac-toe.png";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0e0061]/80 via-black/70 to-black/90" />

      <Navbar />

      <div className="container mx-auto px-6 lg:px-20 py-16 mt-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Portfolio
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          A curated collection of my work in Artificial Intelligence, Robotics,
          Embedded Systems, and innovative software solutions.
        </p>

        <Navbaricons />

        {/* AI PROJECTS */}
        <Section title="AI Projects">
          <ProjectCard
            title="AI K-Drama Recommender"
            image={kdrama}
            description="Machine learning recommendation system using TF-IDF and cosine similarity to personalize K-Drama suggestions."
            tags={["Machine Learning", "NLP", "Python"]}
            status="Completed"
            teamType="Solo"
          />

          <ProjectCard
            title="Fake News Detection"
            image={fake}
            description="Award-winning ML project built using Kaggle datasets. Performs data cleaning, EDA, and classification modeling."
            tags={["Machine Learning", "NLP", "Python", "Data Science"]}
            status="Award Winner"
            teamType="Solo"
          />

          <ProjectCard
            title="Tic-Tac-Toe AI"
            image={tictactoe}
            description="Python AI game where the computer makes optimal strategic decisions."
            tags={["Python", "AI", "Game Dev"]}
            status="Completed"
            teamType="Solo"
          />
        </Section>

        {/* ROBOTICS */}
        <Section title="Robotics Projects">
          <ProjectCard
            title="Underwater Autonomous Robot"
            image={robotics}
            description="Obstacle-avoiding autonomous robot with spatial alignment calculations."
            tags={["Robotics", "Embedded C++", "Sensors"]}
            status="Completed"
            teamType="Group"
          />
        </Section>

        {/* FULL STACK */}
        <Section title="Full-Stack Projects">
          <ProjectCard
            title="K-POP Fan App"
            image={kpop}
            description="React Native social platform for K-Pop and K-Drama fans."
            tags={["React Native", "Node.js", "Mobile App"]}
            status="Completed"
            teamType="Solo"
          />
        </Section>
      </div>
    </div>
  );
};

/* ---------------- SECTION COMPONENT ---------------- */

const Section = ({ title, children }) => (
  <section className="mt-28">
    <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
      {title}
    </h2>

    <div className="flex flex-wrap justify-center gap-10">
      {children}
    </div>
  </section>
);

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard = ({
  title,
  description,
  tags = [],
  image,
  award,
  status,
  teamType
}) => {
  const statusColors = {
    Completed: "bg-green-500/20 text-green-300",
    "In Progress": "bg-yellow-500/20 text-yellow-300",
    "Research Prototype": "bg-indigo-500/20 text-indigo-300",
    "Award Winner": "bg-pink-500/20 text-pink-300"
  };

  const teamColors = {
    Solo: "bg-blue-500/20 text-blue-300",
    Group: "bg-cyan-500/20 text-cyan-300",
    "Team Lead": "bg-orange-500/20 text-orange-300",
    Collaborative: "bg-indigo-500/20 text-indigo-300"
  };

  return (
    <div className="group relative w-full sm:w-[48%] lg:w-[30%]">
      {/* Glow Border */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-30 blur transition group-hover:opacity-80" />

      <div className="relative bg-[#111] p-8 rounded-3xl shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-pink-500/40">

        {/* Image */}
        {image && (
          <div className="relative w-full h-44 mb-6 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        )}

        {/* Status & Team */}
        {(status || teamType) && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            {status && (
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  statusColors[status] || "bg-gray-500/20 text-gray-300"
                }`}
              >
                {status}
              </span>
            )}

            {teamType && (
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  teamColors[teamType] || "bg-gray-500/20 text-gray-300"
                }`}
              >
                {teamType}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Award */}
        {award && (
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-black font-bold shadow-md animate-pulse">
              🏆 {award}
            </div>
          </div>
        )}

        {/* Hover Link */}
        <span className="text-sm font-semibold text-pink-400 opacity-0 group-hover:opacity-100 transition">
          View Project →
        </span>
      </div>
    </div>
  );
};

export default Portfolio;
