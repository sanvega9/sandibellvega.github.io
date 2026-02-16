"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Navbaricons from "../components/Navicons";
import Image from "next/image";
import background from "../image/background.jpg";
import kdrama from "../image/kdrama.png";
import Lung from "../image/Lung Cancer Detection.png"
import AIiot from "../image/AI IoT Garden.png"
import project4 from "../image/project4.png"
import kpop from "../image/ai bell Vega.gif"
import robotics from "../image/robotics.jpg"
import fake from "../image/project5.png"
import iot from "../image/iot1.jpg"
import processing from "../image/image processing.png"
import heart from "../image/heart disease.png"
import aispace from "../image/AI Space (2).gif"
import appmedication from "../image/production-studio.png"
import ai from "../image/AI.gif"
import chatbot from "../image/chatbot.png"
import kpopquiz from "../image/kpop quiz.png"
import tetris from "../image/tetris.png"
import tictactoe from "../image/tic-tac-toe.png"

const Portfolio = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={background}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#0e0061]/80 via-black/70 to-black/90" />

      <Navbar />

      <div className="container mx-auto px-6 lg:px-20 py-16 mt-20 text-center">
        {/* Page Title */}
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6
          bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600
          text-transparent bg-clip-text">
          Portfolio
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          A curated collection of my work in Artificial Intelligence, Robotics,
          Embedded Systems, and innovative software solutions.
        </p>

        <Navbaricons />

        {/*  AI PROJECTS*/}
        <section className="mt-20">
          <h2 className="text-4xl font-extrabold mb-12
            bg-gradient-to-r from-amber-400 to-pink-500
            text-transparent bg-clip-text">
            AI Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Card */}
            <ProjectCard
              title="AI K-Drama Recommender"
              image={kdrama}
              description="Machine learning recommendation system using TF-IDF and cosine similarity to personalize K-Drama suggestions."
              tags={["Machine Learning", "NLP", "Python"]}
            />

            <ProjectCard
              title="Kibana Dashboard Deep Learning Lung Cancer Detection"
              image={Lung}
              description="AI-driven deep learning models to assist in lung cancer detection, paired with impactful medical data visualizations."
              tags={["Data Visualization", "Kibana", "ELK Stack"]}
            />

            <ProjectCard
              title="AI IoT Smart Garden"
              image={AIiot}
              description="An interactive AI-powered gardening app where users chat with a Garden Assistant, identify plants, and receive personalized care tips through curated video content and intelligent recommendations."
              tags={["IoT", "AI Chatbot", "React", "Node.js", "UI/UX", "Python"]}
            />
            <ProjectCard
              title="Save the Wilderness Chatbot"
              image={project4}
              description="An AI-driven chatbot designed to analyze wildfire-related data and assist users located in forested areas. The chatbot enables users to communicate their location, receive safety guidance, and access real-time information during wildfire threats. Served as the lead programmer, overseeing core chatbot logic and data analysis."
              tags={["AI Chatbot", "Python", "Data Science", "Data Analysis", "Wildfire Analysis"]}
            />
            <ProjectCard
              title="Fake News Detection"
              image={fake}
              description="Award-winning machine learning project developed for the UAT Data Science Competition (2/15/2020). Built a fake news detection model using Kaggle datasets, performing data cleaning, exploratory data analysis, and testing multiple classification models. The final system allows users to input news content to determine whether it is likely true or fake. Developed and analyzed using Jupyter Notebook in PyCharm."
              tags={["Machine Learning", "NLP", "Python", "Data Science"]}
              />
             <ProjectCard
              title="Chatbot Alerting"
              image={chatbot}
              description="Emergency Chatbot Assistant is a conversational system that detects urgent user messages, provides real-time safety guidance, and logs interactions securely for documentation and review."
              tags={["Emergency System", "AI Chatbot", "C++", "File Handling"]}
            />
            <ProjectCard
              title="Tic-Tac-Toe"
              image={tictactoe}
              description="A classic Tic-Tac-Toe game built in Python where a human player competes against a strategic AI that can win, block moves, and make intelligent positional decisions."
              tags={["Python", "AI", "Game Dev", "OOP"]}
            />
          </div>
        </section>

        {/* ROBOTICS PROJECTS */}
        <section className="mt-28">
          <h2 className="text-4xl font-extrabold mb-12
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500
            text-transparent bg-clip-text">
            Robotics Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <ProjectCard
              title="Underwater Autonomous Robot"
              image={robotics}
              description="Designed and programmed an underwater robot capable of navigating obstacles and aligning itself precisely using spatial calculations."
              tags={["Robotics", "Embedded C++", "Sensors"]}
            />

            <ProjectCard
              title="Embedded Healthcare Monitoring System"
              image={iot}
              description="Healthcare device leveraging embedded systems to monitor patient vitals and support real-time medical decision-making."
              tags={["Embedded Systems", "Healthcare", "IoT"]}
            />
          </div>
        </section>
        {/* BIOMEDICAL ENGINEERING PROJECTS */}
        <section className="mt-28">
          <h2 className="text-4xl font-extrabold mb-12
  bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400
  text-transparent bg-clip-text">
            Biomedical Engineering Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <ProjectCard
              title="Image Processing Diabetes Retinopathy"
              image={processing}
              description="Designed a user-friendly desktop application that automatically loads, processes, and analyzes retinal fundus images for diabetic retinopathy detection. 
The system visually highlights blood vessels, microaneurysms (early DR indicators), and exudates (severity markers), while also performing FFT and wavelet-based texture analysis. 
A deep learning model classifies images as DR or non-DR, with results saved for clinical review."
              tags={["Biomedical Engineering", "Computer Vision", "Diabetic Retinopathy", "Image Processing", "ML", "DL", "FFT", "Wavelet Analysis"]}
            />

            <ProjectCard
              title="AI Heart Disease Prediction System"
              image={heart}
              description="Developed an Artificial Intelligence application that predicts heart disease risk using real-world biomedical data. 
              The system analyzes patient health metrics such as age, cholesterol levels, blood pressure, and heart rate, then applies machine learning models to deliver accurate predictions.
              An interactive GUI allows users to input personal health data and receive instant AI-based diagnostic feedback."
              tags={["AI", "Biomedical Engineering", "ML", "Data Science", "GUI Application"]}
            />
          </div>
        </section>
         <section className="mt-28">
          <h2 className="text-4xl font-extrabold mb-12
  bg-gradient-to-r from-rose-500 via-fuchsia-500 to-pink-500
  text-transparent bg-clip-text">
            Full-Stack Development Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <ProjectCard
              title="K-POP Fan App"
              image={kpop}
              description="A React Native social platform for K-Pop and K-Drama fans to connect, share posts, explore idol news, and discover recommended accounts with similar interests."
              tags={["React Native", "Mobile App", "Social Platform", "Node.js", "Authentication"]}
            />

            <ProjectCard
              title="Diabetes Chatbot & Chatbot Medication AI"
              image={appmedication}
              description="AI-powered mobile healthcare assistant built with React Native and Python that helps users 
              manage diabetes through smart medication reminders, personalized insights, and ML/DL-based risk prediction."
              tags={["AI", "Healthcare", "React Native", "Python", "ML", "DL", "Mobile App", "UI/UX", "Java"]}
            />
            <ProjectCard
              title="AI Space"
              image={aispace}
              description="AI Space is a mobile app built with React Native that lets future space colonists interactively explore life beyond Earth. It educates users about their health, environmental conditions, and survival."
              tags={["AI", "Health Monitoring", "React Native", "Space Tech", "UI/UX", "Mobile App"]}
            />
            <ProjectCard
              title="AI Astronaut"
              image={ai}
              description="AI Astronaut is an interactive app that lets users explore space knowledge, chat with an AI assistant, and access mission guidelines and status updates."
              tags={["AI", "Space Tech", "React Native", "Space Tech", "STEM Education", "Chatbot", "Mobile App"]}
              award="1st place Space Jam 2 mobile development contest"
            />
            
          </div>
        </section>
          <section className="mt-28">
          <h2 className="text-4xl font-extrabold mb-12
  bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400
  text-transparent bg-clip-text">
            Interactive & Game Applications Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <ProjectCard
              title="Kpop Trivia Quiz"
              image={kpopquiz}
              description="An interactive K-Pop quiz game built with Python and PyQt5, featuring multiple-choice questions, real-time scoring, and a dynamic GUI that tests players’ knowledge of groups, idols, songs, and K-Pop history."
              tags={["GUI", "Python", "PyQt5", "OOP", "Game Dev"]}
            />

            <ProjectCard
              title="Tetris"
              image={tetris}
              description="A fully functional classic Tetris game built with Python and Pygame, featuring real-time controls, collision detection, scoring mechanics, and dynamic gameplay."
              tags={["Python", "Pygame", "Game Dev", "OOP", "Game Loop"]}
            />
          </div>
        </section>

        {/*  link */}
        <div className="mt-24">
          <a
            href="https://sandibellvega.weebly.com/portfolio.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-10 py-4 rounded-full text-lg font-bold text-white
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40
              transition-all duration-300">
              View Full Portfolio →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

  const ProjectCard = ({ title, description, tags, image, award }) => {
  return (
    <div className="group relative w-full sm:w-[48%] lg:w-[30%]">
      {/* Glow */}
      <div className="absolute -inset-0.5 rounded-3xl
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        opacity-30 blur transition group-hover:opacity-80" />
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

        <h3 className="text-2xl font-bold mb-4 text-white">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full
                bg-white/10 text-gray-300 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
       <div className="relative bg-[#111] backdrop-blur-xl p-8 rounded-3xl
        shadow-xl transition-all duration-300
        group-hover:-translate-y-2 group-hover:shadow-pink-500/40">
         {/* Award Badge */}
        {award && (
          <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-bold shadow-md animate-pulse">
            🏆 {Array.isArray(award) ? award[0] : award}
          </div>
        )}

        <span className="text-sm font-semibold text-pink-400
          opacity-0 group-hover:opacity-100 transition">
          View Project →
        </span>
      </div>
    </div>
  );
};


export default Portfolio;








































