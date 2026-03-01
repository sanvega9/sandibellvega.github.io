"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import star from "../image/STAR Schema.png"
import schema from "../image/Schema.png"
import webtoon from "../image/webtoon.png"

const Portfolio = () => {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 1000], [0, -200]);
  return (
    <div className="relative min-h-screen w-full flex flex-col">
     <div className="fixed inset-0 -z-20">
  {/* Base Image */}
  /* {/* <motion.div
    style={{ y: ySlow }}
    className="relative w-full h-screen"
  > */} */
    <Image
      src={background}
      alt="Background"
      fill
      priority
      className="object-cover"
    />
  {/* </motion.div> */}

  {/* Animated Gradient Glow Orbs */}
  <motion.div
    animate={{ x: [0, 60, -40, 0], y: [0, -50, 40, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px]
    bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400
    opacity-20 blur-[120px] rounded-full"
  />

  <motion.div
    animate={{ x: [0, -70, 50, 0], y: [0, 60, -40, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px]
    bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
    opacity-20 blur-[120px] rounded-full"
  />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-400/20" />
      {/* <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px]" /> */}
</div>
      <Navbar />      
    <div className="relative z-10 container mx-auto px-6 lg:px-20 py-16 mt-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Portfolio
        </h1>

        <p className="text-white-300 max-w-3xl mx-auto mb-12 text-lg">
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
            link="https://youtu.be/Dog927xBQjg?si=Tt-7Fc5LWpn6yI7C"
          />
          <ProjectCard 
            title="Kibana Dashboard Deep Learning Lung Cancer Detection" 
            image={Lung} 
            description="AI-driven deep learning models to assist in lung cancer detection, paired with impactful medical data visualizations." 
            tags={["Data Visualization", "Kibana", "ELK Stack"]}
            status="Completed"
            teamType="Solo"
            link="https://youtu.be/XqUTjPeS1fw?si=cNpnAasG__EO9ug8"
            />
          <ProjectCard
            title="Fake News Detection"
            image={fake}
            description="Award-winning ML project built using Kaggle datasets. Performs data cleaning, EDA, and classification modeling."
            tags={["Machine Learning", "NLP", "Python", "Data Science", "Data Cleaning", "AI", "Classification Models" ]}
            status="Completed"
            teamType="Solo"
            link="https://youtu.be/rtOQrdri48s?si=k2zOuHyiKDPm4IO_"
          />
          <ProjectCard title="AI IoT Smart Garden" 
            image={AIiot} 
            description="An interactive AI-powered gardening app where users chat with a Garden Assistant, identify plants, and receive personalized care tips through curated video content and intelligent recommendations." 
            tags={["IoT", "AI Chatbot", "React", "Node.js", "UI/UX", "Python","Computer Vision"]}
            status="In Progress"
            teamType="Solo"
            link="https://youtu.be/vtFHaX-DPMg?si=UkeLLrqdAJSWT6aa"
            />
          <ProjectCard
            title="Tic-Tac-Toe AI"
            image={tictactoe}
            description= "A classic Tic-Tac-Toe game built in Python where a human competes against a rule-based AI. The AI strategically tries to win, block the player, control the center, and prioritize corners for competitive gameplay."
            tags={["Python", "AI", "Game Dev", "OOP"]}
            status="Completed"
            teamType="Solo"
            link="https://youtu.be/WAJOTA_dYNY?si=digC6vs0sd4DYPJr"
          />
          <ProjectCard 
            title="Chatbot Alerting" 
            image={chatbot} 
            description="Emergency Chatbot Assistant is a conversational system that detects urgent user messages, provides real-time safety guidance, and logs interactions securely for documentation and review." 
            tags={["Emergency System", "AI Chatbot", "C++", "File Handling"]} 
            status="Completed"
            teamType="Solo"
            link="https://youtu.be/EBzoJ-lIBxw?si=C4Rhdm65Y62Xrfly"
            />
          <ProjectCard
            title="Save the Wilderness Chatbot" 
            image={project4} 
            description="An AI-driven chatbot designed to analyze wildfire-related data and assist users located in forested areas. The chatbot enables users to communicate their location, receive safety guidance, and access real-time information during wildfire threats. Served as the lead programmer, overseeing core chatbot logic and data analysis." 
            tags={["AI Chatbot", "Python", "Data Science", "Data Analysis", "Wildfire Analysis"]} 
            status="Completed"
            teamType="Team Lead"
            link="https://youtu.be/MTsuxP0yUYM?si=a_-oDW8C2PlKIQN8"
            />
        </Section>

        {/* ROBOTICS */}
        <Section title="Robotics Projects">
          <ProjectCard
            title="Underwater Autonomous Robot"
            image={robotics}
            description="Designed and developed an underwater autonomous robot capable of obstacle avoidance and spatial alignment using sensor-driven navigation algorithms and embedded C++ control systems. Demonstrates robotics engineering, real-time decision logic, and hardware–software integration."
            tags={["Robotics", "Embedded C++", "Sensors", "Control Systems", "Navigation Algorithms"]}
            status="Completed"
            teamType="Group"
            link="https://youtu.be/7rJS7ajkQro?si=eatcAfbhCzk_AOMb"
          />
          <ProjectCard 
            title="Embedded Healthcare Monitoring System" 
            image={iot} 
            description="Designed and implemented a real-time embedded healthcare monitoring system with sensor-driven data acquisition, Arduino-based control, and IoT connectivity. Demonstrates advanced embedded engineering, biomedical technology integration, and intelligent health data processing."
            tags={["Embedded Systems", "Healthcare Technology", "IoT", "Arduino", "Sensor Integration", "Microcontrollers"]} 
            status="Completed"
            teamType="Solo"
            link="https://youtu.be/QOKUcJ8I2Ms?si=TWnm0HfO4isx9r4l"
            /> 
          <ProjectCard
            title="Simon Memory Game"
            image={simon}
            description="An interactive Simon-style memory game designed and simulated in Tinkercad using an Arduino microcontroller. The system utilizes LEDs, push buttons, and a buzzer to generate randomized light and sound sequences that the player must accurately replicate. With each successful round, the sequence increases in length and complexity, enhancing the game's difficulty and reinforcing memory recall skills."
            tags={["Tinkercad", "Arduino", "C++", "Memory Game", "Embedded Systems", "Circuit Design", "Game Logic", "Electronics"]}
            status="Completed"
            teamType="Solo"
            link="https://youtu.be/KHK8GIfiEpY?si=D-vYlRlExiKfl7kY"
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
            link="https://youtu.be/E4Mj-ba0rWc?si=w8APd79H2XA8ckHN"
            />
          <ProjectCard 
            title="AI Heart Disease Prediction System" 
            image={heart} 
            description="Developed an Artificial Intelligence application that predicts heart disease risk using real-world biomedical data. The system analyzes patient health metrics such as age, cholesterol levels, blood pressure, and heart rate, then applies machine learning models to deliver accurate predictions. An interactive GUI allows users to input personal health data and receive instant AI-based diagnostic feedback." 
            tags={["AI", "Biomedical Engineering", "ML", "Data Science", "GUI Application", "Python", "Data analysis"]} 
            status="Research"
            teamType="Solo" 
            link="https://youtu.be/YCBdO6Z9AJY?si=THC6tb5C235O8aNC"
            />
        
        </Section>

        {/* FULL STACK */}
        <Section title="Full-Stack & SWE Projects ">
          <ProjectCard 
            title="Diabetes Chatbot & Chatbot Medication AI"
            image={appmedication} 
            description="AI-powered mobile healthcare assistant built with React Native and Python that helps users manage diabetes through smart medication reminders, personalized insights, and ML/DL-based risk prediction." 
            tags={["AI", "Healthcare", "React Native", "Python", "ML", "DL", "Mobile App", "UI/UX", "Java"]} 
            award="Leadership Award (Production Studio Chatbot Medication AI)" 
            status="Completed" 
            teamType="Team Lead" 
            link="https://youtu.be/jFO7yVDolZI"
            />
          <ProjectCard 
            title="Manga Book Management System"
            image={manga}
            description="A C++-based Manga Book Management System designed to organize, store, and manage manga inventory efficiently. Built with object-oriented programming principles and file handling, the system supports structured data storage, retrieval, and updates while demonstrating strong backend logic and algorithmic design."
            tags={["C++", "OOP","File I/O", "Algorithm", "Inventory System", "Software Design", "Data Structures", "Data Management", "Backend Logic", ]}
            status="Completed"
            teamType="Solo"
            link=""
            />
          <ProjectCard 
            title="AI Space" 
            image={aispace} 
            description="AI Space is a mobile app built with React Native that lets future space colonists interactively explore life beyond Earth. It educates users about their health, environmental conditions, and survival."
            tags={["AI", "Health Monitoring", "React Native", "Space Tech", "UI/UX", "Mobile App", "Space Exploration", "Space Education Tech"]} 
            status="Completed"
            award="Summer 2021 Mobile App Space Best Innovation"
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
            title="Webtoon AI Tracker"
            image={webtoon}
            description="Designed and implemented an AI based tracking platform that collects webtoon data, detects update patterns, and generates analytics to enhance monitoring and content insights."
            tags={["AI", "Tracker System", "Automation", "Data Tracking", "Python"]}            
            status="In Progress"
            teamType="Solo"
            link="https://youtu.be/u_Ln8lkX5a0?si=tmYAkrYQulycv0gC"
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
            image={star}
            description="Designed and implemented a star schema data warehouse to analyze UAT students’ programming skills. Built ETL pipelines using Talend to extract, transform, and load data into MySQL Workbench, enabling structured insights and analytics-driven decision making."
            tags={["MySQL", "ETL", "Talend", "Data Warehouse", "Star Schema", "Data Analysis"]}
            status="Completed"
            teamType="Solo"
            />
          <ProjectCard
            title="Database Reverse Engineering Project"
            image={schema}
            description= "Reverse engineered an existing database schema to rebuild its ER model, created relational tables with PK/FK constraints, and executed complex SQL queries. Documented the system to improve developer understanding of structure and relationships."
            tags={["MySQL", "Database Design", "Reverse Engineering", "ER Modeling", "Schema Analysis"]}
            status="Completed"
            teamType="Solo"
            />
        </Section>
        </div>
    </div>
  );
};


const Section = ({ title, children }) => (
  <section className="mb-24">
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
  link,
  teamType
}) => {
  const statusColors = {
    "Completed": "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    "In Progress": "bg-amber-500/20 text-amber-300 border-amber-400/40",
    "Research": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/40",
  };

  const teamColors = {
    Solo: "bg-blue-500/20 text-blue-300 border-blue-400/40",
    Group: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
    "Team Lead": "bg-orange-500/20 text-orange-300 border-orange-400/40",
  };

  return (
<motion.div
  className="group relative w-full sm:w-[48%] lg:w-[30%]"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}>      
  {/* Glow Border */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-500 opacity-20 blur-2xl group-hover:opacity-60 transition duration-500" />
  
      {/* MAIN GLASS CARD */}
      <div className="relative rounded-3xl p-7 overflow-hidden
                      bg-white/5 backdrop-blur-3xl
                      border border-white/10
                      shadow-[0_20px_80px_rgba(0,0,0,0,6)]
                      transition-all duration-500
                      group-hover:-translate-y-4
                      group-hover:scale-[1.02]
                      group-hover:shadow-[0_0_80px_rgba(236,72,153,0.45)]">

        {/* Shimmer Sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-transform duration-1000" />
        </div>

        {/* Top Light Reflection */}
        <div className="absolute top-0 left-0 w-full h-1/2
                        bg-gradient-to-b from-white/10 to-transparent
                        pointer-events-none rounded-t-3xl" />

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
        <p className="text-white-400 text-sm mb-6">
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
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-pink-400 opacity-0 group-hover:opacity-100 transition"
          >
             View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Portfolio;


























