"use client";
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Navbaricons from '../components/Navicons';

// Skills Data
const skillsData = [
  { name: "Python", level: "Advanced", roles: ["AI", "Robotics", "Software Developer", "Data Science"] },
  { name: "TensorFlow", level: "Proficient", roles:["AI", "ML"] },
  { name: "PyTorch", level: "Proficient", roles: ["AI", "ML"] },
  { name: "Scikit-Learn", level: "Advanced", roles: ["AI", "Data Science"] },
  { name: "Pandas", level: "Advanced", roles: ["AI", "Data Science", "ML"] },
  { name: "Tkinter", level: "Advanced", roles: ["AI", "Data Science", "Software Developer"] },
  { name: "PyQt", level: "Advanced", roles: ["AI", "Data Science", "Software Developer"] },
  { name: "Arduino", level: "Proficient", roles: ["Robotics", "IoT"] },
  { name: "OpenCV", level: "Proficient", roles: ["Robotics", "AI", "Computer Vision"] },
  { name: "Sensors / IoT", level: "Advanced", roles: ["Robotics","IoT"] },
  { name: "React", level: "Advanced", roles: ["Software Developer", "UI/UX", "Full-Stack"] },
  { name: "Next.js", level: "Intermediate", roles: ["Software Developer", "UI/UX", "Full-Stack"] },
  { name: "Node.js", level: "Proficient", roles: ["Software Developer", "UI/UX", "Backend"] },
  { name: "SQL", level: "Proficient", roles: ["Data Science", "Software Engineering"] },
  { name: "AWS", level: "Intermediate", roles: ["AI", "ML", "Cybersecurity", "DevOps"] },
  { name: "HTML", level: "Advanced", roles: ["UI/UX", "Full-Stack", "Web Development"] },
  { name: "CSS", level: "Advanced", roles: ["UI/UX", "Frontend", "Web Designer"] },
  { name: "JavaScript", level: "Advanced", roles: ["UI/UX", "Full-Stack", "Web Development", "Software Developer"] },
  { name: "Java", level: "Advanced", roles: ["Software Engineer", "Full-Stack", "DevOps"] },
  { name: "Kotlin", level: "Intermediate", roles: ["Android Developer", "Full-Stack", "Mobile Engineer"] },
  { name: "C/C++", level: "Proficient", roles: ["Robotics", "Embedded Systems"] },

];
const achievements = [
  {
    title: "Certificate of Leadership – Code Tech Fellow",
    org: "AND101, WEB101",
    year: "2025",
    tag: "Teaching • Leadership • SWE",
  },
  {
    title: "Best in Chatbots",
    org: "UAT March Madness Code Jam",
    year: "2024",
    tag: "AI • Innovation",
  },
  {
    title: "Pluralsight Work Prep Program",
    org: "Girls Who Code | Pluralsight",
    year: "2024",
    tag: "Career Readiness",
  },
  {
    title: "Intro to Cybersecurity",
    org: "CodePath",
    year: "Fall 2024",
    tag: "Cybersecurity",
  },
    {
    title: "RTX Leadership Academy Completion",
    org: "Girls Who Code | RTX",
    year: "2023",
    tag: "Leadership",
  },
  {
    title: "Best Innovation",
    org: "UAT Summer Mobile App Space",
    year: "2021",
    tag: "Innovation • Mobile",
  },
   {
    title: "Leadership Award",
    org: "UAT Production Studio",
    description: "AI-powered Chatbot Medication System",
    year: "2021",
    tag: "AI • Leadership",
  },
  {
    title: "Most Market Viable",
    org:"UAT",
    year:"2021",
    tag:"AI • Innovation",
  },
  {
    title:"NPWEE Certificate of Participation",
    org:"L'Space",
    year:"2021",
    tag:"Certificate • NASA • L'Space • STEM • Workshop • Space Exploration",
  },
  {
    title:"Most Innovative",
    org:"UAT",
    year:"2020",
    tag:"AI • Innovation",
  }
];
const experienceData = [
  {
    role: "STEM Instructor",
    company: "Concorde Education",
    type: "Contract",
    period: "Feb 2026 – Present",
    location: "On-site",
    description: "Deliver engaging, hands-on STEM instruction through project-based learning and creative technology activities. Teach programs including Drone Coding, Gardening & Environmental Science, Video Game Development, Household Science experiments, and Graphic Design. Design interactive lessons connecting STEM concepts to real-world applications. Foster students’ critical thinking, creativity, collaboration, and problem-solving skills. Support students in exploring STEM careers and building confidence in technology.",
    tags: ["STEM Education","Python","Drone Coding","Game Development","Environmental Science","Graphic Design"],
    dot: "bg-orange-400",
    accent: "text-orange-400",
    color: "from-orange-500/10 to-transparent"
  },
  {
    role: "Robotics Instructor",
    company: "Iona University STEP Program",
    type: "Instructor",
    period: "Jul 2025 – Present",
    location: "On-site",
    description: "Led hands-on coding and robotics lessons for middle school students, designing interactive STEM activities using Tinkercad, Scratch, Python, and robotics kits while fostering creativity and interest in technology careers.",
    tags: ["Robotics", "Python", "Scratch", "Tinkercad", "STEM Education", "Mentorship"],
    dot: "bg-red-400",
    accent: "text-red-400",
    color: "from-yellow-500/10 to-transparent",
    linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
  },
  {
    role: "WEB 101 Tech Fellow",
    company: "Code path",
    type: "TF",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    description: "Served as a teaching assistant and technical mentor for WEB101, guiding students through core web development concepts including HTML, CSS, and JavaScript. Provided code reviews, debugging support, and personalized feedback to help students build responsive, real-world projects. Fostered an inclusive learning environment and supported students in strengthening problem-solving and collaboration skills.",
    tags: ["Teaching", "Leadership", "HTML","CSS", "Web", "JS"],
    dot: "bg-emerald-400",
    accent: "text-emerald-400",
    color: "from-emerald-500/10 to-transparent",
    linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
  },
   {
    role: "AND 101 Tech Fellow",
    company: "Code path",
    type: "TF",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    description: "Served as a teaching assistant and technical mentor for Android development fundamentals, supporting them in building mobile applications using modern tools and best practices. Assisted with debugging, project development, and concept clarification, helping students gain confidence in app development and technical problem-solving.",
    tags: ["Teaching", "Leadership", "Android","Kotlin"],
    dot: "bg-emerald-400",
    accent: "text-emerald-400",
    color: "from-emerald-500/10 to-transparent",
    linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
  },
   {
    role: "Marketing Student Ambassador Tech Fellow",
    company: "Code path",
    type: "TF",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    description: "Promoted program initiatives and engaged with prospective students through outreach and community building. Combined marketing efforts with technical mentorship by supporting learners in introductory codepath development courses. Helped increase program awareness while contributing to student success and engagement.",
    tags: ["Marketing", " Communication"],
    dot: "bg-emerald-400",
    accent: "text-emerald-400",
    color: "from-emerald-500/10 to-transparent",
    linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
  },
   {
    role: "CAD Instructor",
    company: "Duro Workforce FunFab",
    type: "Part-time",
    period: "Jan 2024 – Feb 2024",
    location: "Hybrid",
    description: "Taught 3D CAD in Spanish to high school students, guiding them in creating projects and pitch decks using Tinkercad while building foundational STEM and design skills.",
    tags: ["CAD", "Tinkercad", "Teaching", "STEM Education", "Bilingual", "3D Design"],
    dot: "bg-orange-400",
    accent: "text-orange -400",
    color: "from-green-500/10 to-transparent",
    linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
  },
   {
    role: "Mentor",
    company: "Girls Who Code Mentoring Corps",
    type: "Leadership / Mentorship",
    period: "Sep 2023 – May 2025",
    location: "Hybrid",
    description: "Mentored high school students interested in computer science by guiding them through coding challenges, college preparation, and tech career exploration, while coordinating engagement events.",
    tags: ["Mentorship", "Leadership", "Education", "Community Engagement", "STEM"],
    dot: "bg-blue-400",
    accent: "text-blue-400",
    color: "from-blue-500/10 to-transparent",
    linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
   },
    {
      role: "Leadership Academy Fellow",
      company: "Girls Who Code & RTX",
      type: "Fellowship",
      period: "Aug 2023 – Dec 2023",
      location: "Remote",
      description: "Led a four-month program for 100+ college students and developed a React Native app that increased appointment scheduling by 30%, alongside building an AI chatbot for health-related support.",
      tags: ["React Native", "AI", "Chatbot", "Leadership", "Healthcare Tech"],
      dot: "bg-purple-400",
      accent: "text-purple-400",
      color: "from-purple-500/10 to-transparent",
      linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
    },
      {
        role: "Data Science Intern",
        company: "Willow.ai",
        type: "Internship",
        period: "Sep 2021 – Dec 2021",
        location: "Remote",
        description: "Developed chatbot features using Python and implemented sentiment analysis to understand user behavior, contributing to improved engagement and user experience.",
        tags: ["AI", "Data Science","Python", "NLP", "Sentiment Analysis"],
        dot: "bg-pink-400",
        accent: "text-pink-400",
        color: "from-pink-500/10 to-transparent",
        linkedin_url: "https://www.linkedin.com/in/sandibell-vega-953889180/",
  },
];
const roles = [
  "All", "AI", "ML", "Robotics", "IoT", "UI/UX", "Frontend", "Backend", "Full-Stack",
  "Web Development", "Data Science", "Software Engineering", "Software Developer",
  "Android Developer", "Mobile Engineer", "Cybersecurity", "DevOps", "Web Designer","Computer Vision"
];

const About = () => {
  const [activeRole, setActiveRole] = useState("All");
  const [visible, setVisible] = useState(false);
  const [githubRepos, setGithubRepos]=useState([]);
  const techRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting)
          setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (techRef.current) observer.observe(techRef.current);

    return () => {
      if(techRef.current) observer.unobserve(techRef.current);
    };
  }, []);
  useEffect(() => {
  fetch("https://api.github.com/users/sanvega9/repos?sort=updated&per_page=20")
    .then((res) => res.json())
    .then((data) => {
      if (!Array.isArray(data)) {
        console.error("GitHub API Error:", data);
        return;
      }

      const filtered = data
        .filter((repo) => !repo.fork)
        .sort(
          (a, b) =>
            b.stargazers_count +
            b.forks_count -
            (a.stargazers_count + a.forks_count)
        )
        .slice(0, 6);

      setGithubRepos(filtered);
    })
    .catch((err) => console.error(err));
}, []);
  const filteredSkills =
    activeRole === "All"
      ? skillsData
      : skillsData.filter(skill => skill.roles.includes(activeRole));

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
        

        {/* Degrees */}
        <section className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-6 text-red-700 text-center">Degrees Received</h2>
          <div className = "relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-500">
             <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-3 text-white">University of Advancing Technology</h3>
            <p className="text-gray-400 mb-1">Bachelor of Science in Robotics and Embedded Systems, 2021</p>
            <p className="text-gray-400 mb-1">Bachelor of Science in Artificial Intelligence, 2021</p>
          </div>
          </div>
         
        </section>
        <section className="mb-20 mt-16">
          <h2 className= "text-3xl lg:text-4xl font-extrabold text-center text-emerald-400 mb-4">
           Experience
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12">
            via{" "}
            <a
              href="https://www.linkedin.com/in/sandibell-vega-953889180/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition underline underline-offset-2"
              >
          LinkedIn
          </a>
        </p>
          
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10"/>
          <div className="flex flex-col gap-10">
            {experienceData.map((exp, index) =>(
              <div key={index} className="relative pl-16">
                <div className={ `absolute left-[18px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#121212] ${exp.dot}`}/>
                <div className={"rounded-2xl bg-[#1e1e1e] border border-white/10 p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-emerald-500/10 relative overflow-hidden"}>

                    {/* Gradient glow layer */}

                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 hover:opacity-100 transition-opacity rounded-2xl`} />
                    <div className="relative z-10">
                      {/* Header row */}

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">

                        <div>

                          <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>

                          <p className={`text-sm font-semibold ${exp.accent}`}>{exp.company}</p>

                          <p className="text-xs text-gray-500 mt-0.5">{exp.type}</p>

                        </div>

                        <div className="text-right shrink-0">

                          <span className="text-xs text-gray-400 font-medium block">{exp.period}</span>

                          <span className="text-xs text-gray-500 block mt-0.5">{exp.location}</span>

                        </div>

                      </div>


                      {/* Description */}

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

 

                      {/* Footer: tags + LinkedIn link */}

                      <div className="flex justify-between items-center mt-4">

                        <div className="flex flex-wrap gap-2">

                          {exp.tags.map(tag => (

                            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-gray-300 font-medium">

                              {tag}

                            </span>

                          ))}

                        </div>

                        <a

                          href={exp.linkedin_url}

                          target="_blank"

                          rel="noopener noreferrer"

                          className="text-xs text-gray-400 font-medium hover:text-emerald-400 transition shrink-0 ml-4"

                        >

                          View on LinkedIn

                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              ))}
              </div>
            </div>
        </section>

        {/* Skills Section */}
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

        {/* Tech Stack */}
        <section ref={techRef} className="mb-20 mt-24">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-pink-400 mb-10">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                  ${activeRole === role
                    ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {filteredSkills.map(skill => (
              <div key={skill.name} className="rounded-2xl bg-[#1e1e1e] border border-white/10 p-6 shadow-lg hover:-translate-y-1 hover:shadow-pink-500/20 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold
                    ${skill.level === "Advanced"
                      ? "bg-green-500/20 text-green-400"
                      : skill.level === "Intermediate"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"}`}>
                    {skill.level}
                  </span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                  <div className={`h-full rounded-full
                    ${skill.level === "Advanced" ? "w-[90%] bg-green-400"
                      : skill.level === "Intermediate" ? "w-[65%] bg-yellow-400"
                      : "w-[75%] bg-blue-400"}`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.roles.map(role => (
                    <span key={role} className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">{role}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Achievements */}
<section className="mb-20 mt-24">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-purple-400 mb-12">
    Achievements & Leadership
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {achievements.map((item, index) => (
      <div
        key={index}
        className="relative rounded-2xl bg-[#1e1e1e] border border-white/10 p-6 shadow-lg
                   hover:-translate-y-1 hover:shadow-purple-500/30 transition-all duration-300"
      >
        {/* Glow accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-1">
            {item.title}
          </h3>

          <p className="text-sm text-gray-400 mb-2">
            {item.org}
          </p>

          {item.description && (
            <p className="text-gray-300 text-sm mb-3">
              {item.description}
            </p>
          )}

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
              {item.tag}
            </span>

            <span className="text-xs text-gray-400 font-medium">
              {item.year}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        {/* GitHub Projects */}
<section className="mb-20 mt-24">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-cyan-400 mb-12">
    GitHub Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {githubRepos.map((repo, index) => (
      <div
        key={index}
        className="relative rounded-2xl bg-[#1e1e1e] border border-white/10 p-6 shadow-lg
                   hover:-translate-y-1 hover:shadow-cyan-500/30 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-1">{repo.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{repo.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">
              {repo.language}
            </span>
            <a
              href={repo.html_url}
              target="_blank"
              className="text-xs text-gray-400 font-medium hover:text-cyan-400 transition"
            >
              View on GitHub
            </a>
            <img
  src="https://ghchart.rshah.org/sanvega9"
  alt="GitHub Contributions"
  className="rounded-xl w-full"
/>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    </div>
  );
};

export default About;








