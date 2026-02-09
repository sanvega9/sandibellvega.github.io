import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Navbaricons from '../components/Navicons'; // Ensure this path is correct

// Skills Data
const skilsData = [
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
  { name: "HTML", level: "Advanced", roles: ["UI/UX", "Full-stack", "Web Development"] },
  { name: "CSS", level: "Advanced", roles: ["UI/UX", "Frontend", "Web Designer"] },
  { name: "JavaScript", level: "Advanced", roles: ["UI/UX", "Full-stack", "Web Development", "Software Developer"] },
  { name: "Java", level: "Advanced", roles: ["Software Engineer", "Full-Stack", "DevOps"] },
  { name: "Kotlin", level: "Intermediate", roles: ["Android Developer", "Full-Stack", "Mobile Engineer"] },
];

const roles = [
  "All", "AI", "ML", "Robotics", "IoT", "UI/UX", "Frontend", "Backend", "Full-Stack",
  "Web Development", "Data Science", "Software Engineering", "Software Developer",
  "Android Developer", "Mobile Engineer", "Cybersecurity", "DevOps", "Web Designer"
];

const About = () => {
  const [activeRole, setActiveRole] = useState("All");
  const [visible, setVisible] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (techRef.current) observer.observe(techRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeRole === "All"
      ? skilsData
      : skilsData.filter(skill => skill.roles.includes(activeRole));

  return (
    <div className="relative bg-[#121212] flex min-h-screen flex-col">
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

        {/* Skills & Qualifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-amber-500">Skills & Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Programming Languages</h3>
              <p className="text-gray-400">Proficient in Python, C/C++, Java, HTML, CSS, JavaScript, ReactJS, Node.js, SQL, and R.</p>
            </div>
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Artificial Intelligence & Machine Learning</h3>
              <p className="text-gray-400">
                Skilled in AI, Machine Learning, Deep Learning, Scikit-Learn, TensorFlow, PyTorch, NLP, and Data Science.
              </p>
            </div>
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Tools & Frameworks</h3>
              <p className="text-gray-400">
                Experienced with Node.js, React.js, Tableau, Jupyter Notebook, Visual Studio, PyCharm, SPSS, MATLAB, AWS, Power BI, and MySQL.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section ref={techRef} className="mb-20 mt-24">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-pink-400 mb-10">
            Tech Stack
          </h2>

          {/* Role Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                  ${
                    activeRole === role
                      ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Tech Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {filteredSkills.map(skill => (
              <div
                key={skill.name}
                className="rounded-2xl bg-[#1e1e1e] border border-white/10 p-6
                           shadow-lg hover:-translate-y-1
                           hover:shadow-pink-500/20 transition-all"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold
                      ${
                        skill.level === "Advanced"
                          ? "bg-green-500/20 text-green-400"
                          : skill.level === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                  <div
                    className={`h-full rounded-full
                      ${
                        skill.level === "Advanced"
                          ? "w-[90%] bg-green-400"
                          : skill.level === "Intermediate"
                          ? "w-[65%] bg-yellow-400"
                          : "w-[75%] bg-blue-400"
                      }`}
                  />
                </div>

                {/* Role Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.roles.map(role => (
                    <span key={role} className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
        </section>

      </div>
    </div>
  );
};

export default About;





