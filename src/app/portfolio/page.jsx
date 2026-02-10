"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Navbaricons from "../components/Navicons";
import Image from "next/image";
import background from "../image/background.jpg";

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
              description="Machine learning recommendation system using TF-IDF and cosine similarity to personalize K-Drama suggestions."
              tags={["Machine Learning", "NLP", "Python"]}
            />

            <ProjectCard
              title="Kibana Dashboard Deep Learning Lung Cancer Detection"
              description="AI-driven deep learning models to assist in lung cancer detection, paired with impactful medical data visualizations."
              tags={["Data Visualization", "Kibana", "ELK Stack"]}
            />

            <ProjectCard
              title="AI IoT Smart Garden"
              description="An interactive AI-powered gardening app where users chat with a Garden Assistant, identify plants, and receive personalized care tips through curated video content and intelligent recommendations."
              tags={["IoT", "AI Chatbot", "React", "Node.js", "UI/UX", "Python"]}
            />
            <ProjectCard
              title="Save the Wilderness Chatbot"
              description="An AI-driven chatbot designed to analyze wildfire-related data and assist users located in forested areas. The chatbot enables users to communicate their location, receive safety guidance, and access real-time information during wildfire threats. Served as the lead programmer, overseeing core chatbot logic and data analysis."
              tags={["AI Chatbot", "Python", "Data Science", "Data Analysis", "Wildfire Analysis"]}
            />
            <ProjectCard
              title="Fake News Detection"
              description="Award-winning machine learning project developed for the UAT Data Science Competition (2/15/2020). Built a fake news detection model using Kaggle datasets, performing data cleaning, exploratory data analysis, and testing multiple classification models. The final system allows users to input news content to determine whether it is likely true or fake. Developed and analyzed using Jupyter Notebook in PyCharm."
              tags={["Machine Learning", "NLP", "Python", "Data Science"]}
              />
            
          </div>
        </section>

        {/* ROBOTICS PROJECTS */}
        <section className="mt-28">
          <h2 className="text-4xl font-extrabold mb-12
            bg-gradient-to-r from-emerald-400 to-cyan-500
            text-transparent bg-clip-text">
            Robotics Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <ProjectCard
              title="Underwater Autonomous Robot"
              description="Designed and programmed an underwater robot capable of navigating obstacles and aligning itself precisely using spatial calculations."
              tags={["Robotics", "Embedded C++", "Sensors"]}
            />

            <ProjectCard
              title="Embedded Healthcare Monitoring System"
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
              description="Designed a user-friendly desktop application that automatically loads, processes, and analyzes retinal fundus images for diabetic retinopathy detection. 
The system visually highlights blood vessels, microaneurysms (early DR indicators), and exudates (severity markers), while also performing FFT and wavelet-based texture analysis. 
A deep learning model classifies images as DR or non-DR, with results saved for clinical review."
              tags={["Biomedical Engineering","Computer Vision","Diabetic Retinopathy","Image Processing","ML","DL","FFT","Wavelet Analysis"]}
            />

            <ProjectCard
              title="AI Heart Disease Prediction System"
              description="Developed an Artificial Intelligence application that predicts heart disease risk using real-world biomedical data. 
              The system analyzes patient health metrics such as age, cholesterol levels, blood pressure, and heart rate, then applies machine learning models to deliver accurate predictions.
              An interactive GUI allows users to input personal health data and receive instant AI-based diagnostic feedback."
              tags={["AI", "Biomedical Engineering", "ML", "Data Science", "GUI Application"]}
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

/* PROJECT CARD COMPONENT */
const ProjectCard = ({ title, description, tags }) => {
  return (
    <div className="group relative w-full sm:w-[48%] lg:w-[30%]">
      {/* Glow */}
      <div className="absolute -inset-0.5 rounded-3xl
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        opacity-30 blur transition group-hover:opacity-80" />

      <div className="relative bg-[#111] backdrop-blur-xl p-8 rounded-3xl
        shadow-xl transition-all duration-300
        group-hover:-translate-y-2 group-hover:shadow-pink-500/40">

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

        <span className="text-sm font-semibold text-pink-400
          opacity-0 group-hover:opacity-100 transition">
          View Project →
        </span>
      </div>
    </div>
  );
};

export default Portfolio;






