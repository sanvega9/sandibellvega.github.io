import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Navbaricons from '../components/Navicons'; // Ensure this path is correct
{/* */}
const skilsData=[
  { name: "Python", level: "Proficient", roles: ["AI", "Robotics", "Software Developer", "Data Science"] },
  { name: "TensorFlow", level: "Proficient", roles:["AI", "ML"] },
  { name: "PyTorch", level: "Advanced", roles: ["AI", "ML"] },
  { name: "Scikit-Learn", level: "Proficient", roles: ["AI", "Data Science"] },
  { name: "Pandas", level: "Proficient", roles: ["AI", "Data Science", "ML"] },
  { name: "Tkinter", level: "Proficient", roles: ["AI", "Data Science", "Software Developer"] },
  { name: "PyQt", level: "Proficient", roles: ["AI", "Data Science", "Software Developer"] },
  { name: "Arduino", level: "Advanced", roles: ["Robotics", "IoT"] },
  { name: "Sensors / IoT", level: "Proficient", roles: ["Robotics","IoT"] },
  { name: "React", level: "Advanced", roles: ["Software Developer", "UI/UX", "Full-Stack"] },
  { name: "Next.js", level: "Intermediate", roles: ["Software Developer", "UI/UX", "Full-Stack"] },
  { name: "Node.js", level: "Proficient", roles: ["Software Developer", "UI/UX", "Backend"] },
  { name: "SQL", level: "Advanced", roles: ["Data Science", "Software Engineering"] },
  { name: "AWS", level: "Intermediate", roles: ["AI", "ML", "Cybersecurity", "DevOps"] },
  { name: "Html", level: "Advanced", roles: ["UI/UX", "Full-stack", "Web Development"] },
  { name: "CSS", level: "Advanced", roles: ["UI/UX", "Frontend", "Web Designer"] },
  { name: "Js", level: "Advanced", roles: ["UI/UX", "Full-stack", "Web Development", "Software Developer"] },
  { name: "Java", level: "Advanced", roles: ["Software Engineer", "Full Stack", "DevOps"] },
  { name: "Kotlin", level: "Intermediate", roles: ["Android Developer", "Full Stack", "Mobile Engineer"] },
];
const roles=["All", "AI", "UI/UX", "Full-stack", "Web Development", "Data Science", "Software Engineering", 
             "Software Developer", "Android Developer", "Mobile Engineer", "AI", "ML", "Cybersecurity", 
             "DevOps", "Robotics", "Web Designer"
            ];

const About = () => {
  return (
    <div className="relative bg-[#121212] flex min-h-screen flex-col ">
      {/* Include Navbar */}
      <Navbar />

      <div className="container mx-auto py-10 mt-20">
        {/* Hero Section */}
        <section className="text-center mb-12 items-center">
        
          <h1 className="text-4xl font-bold mt-4 mb-2 text-amber-600">About Me</h1>
          <p className="text-lg text-gray-300">
            Hello! I'm Sandibell Vega, an Artificial Intelligence and Robotics Engineer with a passion for innovation and technology. I hold dual Bachelor of Science degrees in Artificial Intelligence, Robotics, and Embedded Systems from the University of Advancing Technology. My academic journey was enriched by a disciplined approach to learning, where I consistently documented my insights and breakthroughs. This reflective practice has shaped my ability to innovate and adapt in the rapidly evolving tech landscape.
          </p>
        </section>
       <div className="mt-9">
        <Navbaricons/>
       </div>

        {/* Degree Section */}
              <section className="mb-12 flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-6 text-red-700 text-center">Degrees Received</h2>
              <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
                
        <h3 className="text-2xl font-bold mb-2 text-white">University of Advancing Technology</h3>
          <p className="text-gray-400">Bachelor of Science in Robotics and Embedded Systems, 2021</p>
          <p className="text-gray-400">Bachelor of Science in Artificial Intelligence, 2021</p>
        
        </div>
        </section>
                      {/* Skills Section */}

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-amber-500">Skills & Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Programming Languages</h3>
              <p className="text-gray-400">
                Proficient in Python, C/C++, Java, HTML, CSS, JavaScript, ReactJS, Node.js, SQL, and R.
              </p>
            </div>

            {/* Skill Category 2 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Artificial Intelligence & Machine Learning</h3>
              <p className="text-gray-400">
                Skilled in AI, Machine Learning, Deep Learning, Scikit-Learn, TensorFlow, PyTorch, Natural Language Processing (NLP), and Data Science.
              </p>
              <p className="text-gray-400">Experienced in developing machine learning models, data analysis, and implementing AI-driven solutions.</p>
            </div>

            {/* Skill Category 3 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Tools & Frameworks</h3>
              <p className="text-gray-400">
                Experienced with Node.js, React.js, Tableau, Jupyter Notebook, Visual Studio, PyCharm, SPSS, MATLAB, AWS, Power BI, and MySQL.
              </p>
            </div>
            {/* Languages */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Languages</h3>
              <p className="text-gray-400">Spanish (Fluent), English (Native)</p>
            </div>

            {/* Soft Skills */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Soft Skills</h3>
              <p className="text-gray-400">
                Leadership, teamwork, multitasking, attention to detail, software and web development, data science, machine learning, AI, data visualization.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Robotics & Embedded Systems</h3>
              <p className="text-gray-400">Skilled in designing and programming robotics systems, as well as working with embedded systems for various applications.</p>
            </div>
          </div>
        </section>
        

        {/* Achievements Section */}
        <section className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-6 text-green-600">Achievements</h2>
          <ul className="list-inside space-y-4">
            <li className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">GWC Pluralsight Work Prep 2024</h3>
              <p className="text-gray-400">Received certification from Girls Who Code for outstanding performance in work prep training.</p>
            </li>
            <li className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">2023 RTX Leadership Academy Completion</h3>
              <p className="text-gray-400">Completed the leadership academy by Girls Who Code | RTX.</p>
            </li>
            <li className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">UAT Data Science Competition Winner</h3>
              <p className="text-gray-400">Won the competition for fake news detection using machine learning, demonstrating strong analytical skills.</p>
            </li>
            <li className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">Best Innovation</h3>
              <p className="text-gray-400">UAT Summer 2021 Mobile App Space Award.</p>
            </li>
          </ul>
        </section>



      {/* Contact Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold mb-6 text-amber-500">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          I’m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">Sandibell Vega</h3>
            <p className="text-gray-400">AI & Robotics Engineer</p>
          </div>
          <div className="mb-4 items-center">
            <p className="text-gray-300">bellvega1@gmail.com</p>
          </div>
          <a
            href="mailto:bellvega1@gmail.com"
            className="block w-full text-center py-3 mt-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-600 transition-all text-white"
          >
            Email Me
          </a>
        </div>
        
      </section >
      

      </div>
    </div>
  );
};

export default About;



