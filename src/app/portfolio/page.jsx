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
import manga from "../image/manga.png";
import rock from "../image/rock paper.png"
import pacman from "../image/pac-man.png"
import aidiabetes from "../image/ai diabetes cardio.png"
import todolist from"../image/To-Do List.png"
import simon from "../image/simon memory.png"

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
            tags={["Machine Learning", "NLP", "Python", "Cosine Similarity", "TF-IDF", "Data Analysis", "Recommender Systems", "AI"]}
            status="Completed"
            teamType="Solo"
          />
          <ProjectCard 
            title="Kibana Dashboard Deep Learning Lung Cancer Detection" 
            image={Lung} 
            description="AI-driven deep learning models to assist in lung cancer detection, paired with impactful medical data visualizations." 
            tags={["Data Visualization", "Kibana", "ELK Stack"]}
            status="Completed"
            teamType="Solo"
            />

          <ProjectCard
            title="Fake News Detection"
            image={fake}
            description="Award-winning ML project built using Kaggle datasets. Performs data cleaning, EDA, and classification modeling."
            tags={["Machine Learning", "NLP", "Python", "Data Science", "Data Cleaning", "AI", "Classification Models" ]}
            status="Completed"
            teamType="Solo"
          />
          <ProjectCard title="AI IoT Smart Garden" 
            image={AIiot} 
            description="An interactive AI-powered gardening app where users chat with a Garden Assistant, identify plants, and receive personalized care tips through curated video content and intelligent recommendations." 
            tags={["IoT", "AI Chatbot", "React", "Node.js", "UI/UX", "Python"]}
            status="Completed"
            teamType="Solo"
            />

          <ProjectCard
            title="Tic-Tac-Toe AI"
            image={tictactoe}
            description= "A classic Tic-Tac-Toe game built in Python where a human competes against a rule-based AI. The AI strategically tries to win, block the player, control the center, and prioritize corners for competitive gameplay."
            tags={["Python", "AI", "Game Dev", "OOP"]}
            status="Completed"
            teamType="Solo"
          />
          <ProjectCard 
            title="Chatbot Alerting" 
            image={chatbot} 
            description="Emergency Chatbot Assistant is a conversational system that detects urgent user messages, provides real-time safety guidance, and logs interactions securely for documentation and review." 
            tags={["Emergency System", "AI Chatbot", "C++", "File Handling"]} 
            status="Completed"
            teamType="Solo"
            />
          <ProjectCard
            title="Save the Wilderness Chatbot" 
            image={project4} 
            description="An AI-driven chatbot designed to analyze wildfire-related data and assist users located in forested areas. The chatbot enables users to communicate their location, receive safety guidance, and access real-time information during wildfire threats. Served as the lead programmer, overseeing core chatbot logic and data analysis." 
            tags={["AI Chatbot", "Python", "Data Science", "Data Analysis", "Wildfire Analysis"]} 
            status="Completed"
            teamType="Team Lead"
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
          <ProjectCard 
            title="Embedded Healthcare Monitoring System" 
            image={iot} 
            description="Healthcare device leveraging embedded systems to monitor patient vitals and support real-time medical decision-making."
            tags={["Embedded Systems", "Healthcare", "IoT"]} 
            status="Completed"
            teamType="Solo"
            /> 
          <ProjectCard
            title="Simon Memory Game"
            image={simon}
            description="An interactive memory game built in Tinkercad using Arduino, LEDs, push buttons, and a buzzer. The system generates randomized light sequences that the player must replicate, increasing in difficulty with each round."
            tags={["Tinkercad", "Arduino", "Robotics", "Memory Game", "Embedded Systems"]}
            status="Completed"
            teamType="Solo"
            />
        </Section>
        <Section title="Biomedical Engineering Projects">
          <ProjectCard
            title="Image Processing Diabetes Retinopathy" 
            image={processing} 
            description="Designed a user-friendly desktop application that automatically loads, processes, and analyzes retinal fundus images for diabetic retinopathy detection. The system visually highlights blood vessels, microaneurysms (early DR indicators), and exudates (severity markers), while also performing FFT and wavelet-based texture analysis. A deep learning model classifies images as DR or non-DR, with results saved for clinical review."
            tags={["Biomedical Engineering", "Computer Vision", "Diabetic Retinopathy", "Image Processing", "ML", "DL", "FFT", "Wavelet Analysis", "Python"]} 
            status="Research" 
            teamType="Solo"
            />
          <ProjectCard 
            title="AI Heart Disease Prediction System" 
            image={heart} 
            description="Developed an Artificial Intelligence application that predicts heart disease risk using real-world biomedical data. The system analyzes patient health metrics such as age, cholesterol levels, blood pressure, and heart rate, then applies machine learning models to deliver accurate predictions. An interactive GUI allows users to input personal health data and receive instant AI-based diagnostic feedback." 
            tags={["AI", "Biomedical Engineering", "ML", "Data Science", "GUI Application", "Python", "Data analysis"]} 
            status="Research"
            teamType="Solo" />
        
        </Section>

        {/* FULL STACK */}
        <Section title="Full-Stack & SWE Projects ">
          <ProjectCard
            title="K-POP Fan App"
            image={kpop}
            description= "A social platform built with React Native for K-Pop and K-Drama enthusiasts. Users can connect, share posts, like and comment, and engage with fan communities in real-time."
            tags={["React Native", "Node.js", "Mobile App", "Frontend", "Backend", "Social Platform", "UI/UX"]}
            status="Completed"
            teamType="Solo"
          />
          <ProjectCard 
            title="Rock Paper & Scissors Web Game"
            image={rock}
            description="A dynamic web game built with HTML, CSS, and JavaScript featuring interactive gameplay and responsive design."
            tags={["HTML", "CSS", "JavaScript", "Frontend", "Game Dev"]}
            status= "Completed"
            teamType="Solo"
            />
          <ProjectCard 
            title="AI Space" 
            image={aispace} 
            description="AI Space is a mobile app built with React Native that lets future space colonists interactively explore life beyond Earth. It educates users about their health, environmental conditions, and survival."
            tags={["AI", "Health Monitoring", "React Native", "Space Tech", "UI/UX", "Mobile App"]} 
            status="Completed" 
            teamType="Solo"
            />
            <ProjectCard
            title="To-Do List App"
            image={todolist}
            description="A desktop productivity app built with Python and Tkinter for managing tasks. Users can add, delete, and mark tasks as completed, while a persistent history log tracks all task changes. Features include real-time task management, interactive GUI elements, and file-based data persistence for long-term task tracking."
            tags={["Python", "Tkinter", "GUI", "File I/O", "Task Management"]}
            status="Completed"
            teamType="Solo"
            />
          <ProjectCard 
            title="AI Astronaut" 
            image={ai} 
            description="AI Astronaut is an interactive app that lets users explore space knowledge, chat with an AI assistant, and access mission guidelines and status updates."
            tags={["AI", "Space Tech", "React Native", "Space Tech", "STEM Education", "Chatbot", "Mobile App"]} 
            award="1st place Space Jam 2 mobile development contest" 
            status="Completed" 
            teamType="Solo" 
            />
           <ProjectCard
            title="AI Diabetes Cardio"
            image={aidiabetes}
            description="A React Native app that leverages AI to provide users with information, guidance, and interactive support for diabetes and cardiovascular health. Features include a friendly AI chatbot for lifestyle tips, health monitoring insights, and actionable recommendations to promote wellness and preventive care."
            tags={["React Native", "AI Chatbot", "HealthTech", "Mobile App"]}
            status="Completed"
            teamType="Solo"
            />
           <ProjectCard 
            title="Diabetes Chatbot & Chatbot Medication AI"
            image={appmedication} 
            description="AI-powered mobile healthcare assistant built with React Native and Python that helps users manage diabetes through smart medication reminders, personalized insights, and ML/DL-based risk prediction." 
            tags={["AI", "Healthcare", "React Native", "Python", "ML", "DL", "Mobile App", "UI/UX", "Java"]} 
            award="Leadership Award (Production Studio Chatbot Medication AI)" 
            status="Completed" 
            teamType="Team Lead" 
            />
          <ProjectCard 
            title="Manga Book Management System"
            image={manga}
            description="A classic Pac-Man remake built with Python and Pygame featuring intelligent ghost AI, collision detection, scoring mechanics, and structured OOP design. Demonstrates game logic implementation, real-time interaction, and modular programming."
            tags={["C++", "OOP","File I/O", "Algorithm", "Inventory System", "Software Design", "Data Structures", "Data Management", "Backend Logic", ]}
            status="Completed"
            teamType="Solo"
            />

        </Section>
        <Section title="Interactive & Game Applications Projects">
          <ProjectCard 
            title="Kpop Trivia Quiz" 
            image={kpopquiz} 
            description="An interactive K-Pop quiz game built with Python and PyQt5, featuring multiple-choice questions, real-time scoring, and a dynamic GUI that tests players’ knowledge of groups, idols, songs, and K-Pop history." 
            tags={["GUI", "Python", "PyQt5", "OOP", "Game Dev"]} 
            status="Completed"
            teamType="Solo"
            /> 
          <ProjectCard 
            title="Tetris"
            image={tetris} 
            description="A fully functional classic Tetris game built with Python and Pygame, featuring real-time controls, collision detection, scoring mechanics, and dynamic gameplay." 
            tags={["Python", "Pygame", "Game Dev", "OOP", "Game Loop"]}
            status="Completed"
            teamType="Solo"
            />
          <ProjectCard
            title="Pac-Man"
            image={pacman}
            description="Developed a Pac-Man style game using Python and Pygame with AI-driven enemies, structured OOP architecture, and responsive gameplay mechanics. Highlights strong problem-solving, algorithm design, and interactive system development skills."
            tags={["Python", "Pygame", "Game Dev", "AI", "OOP"]}
            status="Completed"
            teamType="Solo"
            />
        </Section>
        <Section title="Data Engineering & Analytics Projects">
          <ProjectCard
            title="UAT Student Programming Skill Analysis (Star Schema & ETL)"
            description= "ETL and star schema project analyzing UAT students’ programming skills using MySQL Workbench and Talend for structured data insights."
            tags={["MySQL", "ETL", "Talend", "Data Warehouse", "Star Schema", "Data Analysis"]}
            status="Completed"
            teamType="Solo"
            />
        </Section>
      </div>
    </div>
  );
};


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
    "Completed": "bg-green-500/20 text-green-300",
    "In Progress": "bg-yellow-500/20 text-yellow-300",
    "Research": "bg-indigo-500/20 text-indigo-300",
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
          <div className="absolute top-4 left-1/2 -translate-x-1/2 
            flex items-center gap-3
            px-5 py-2
            bg-black/50 backdrop-blur-md
            border border-white/10
            rounded-2xl
            shadow-lg">
            {status && (
              <span
        className={`text-sm sm:text-sm px-4 py-1.5 rounded-full font-semibold tracking-wide ${
          status === "Research"
            ? "bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 text-fuchsia-300"
            : statusColors[status] || "bg-gray-500/20 text-gray-300"
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






















