import React from 'react';
import { Terminal, Calendar, Building2, Code2, CircleDot } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "PHP Developer",
      company: "Daydreamsoft Infotech",
      duration: "Nov 2022 - Apr 2023",
      status: "COMPLETED",
      code: "EXP_001",
      responsibilities: [
        "Served as a crucial link between backend and client engineers, contributing to the creation of innovative solutions",
        "Partnered with UX team in integrating user feedback and focus group data into UI design philosophies",
        "Developed and maintained PHP-based web applications",
        "Implemented responsive design principles for optimal user experience",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ],
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "UI/UX", "Responsive Design"]
    },
    {
      title: "Java Developer",
      company: "G-Soft Technology Pvt. Ltd.",
      role: "Backend Development Intern",
      duration: "Aug 2024 - Mar 2025",
      status: "CONTINUE",
      code: "EXP_002",
      responsibilities: [
        "Developing enterprise applications using Java and Spring Framework ecosystem",
        "Building and optimizing database operations using JDBC and MySQL",
        "Implementing RESTful APIs and microservices using Spring Boot",
        "Creating responsive web interfaces using React.js and modern JavaScript",
        "Designing and implementing scalable backend architectures",
        "Writing clean, maintainable code following best practices and design patterns",
        "Participating in code reviews and agile development processes"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "React.js", "Git"]
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-black text-white overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 bg-black opacity-90">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500/20 text-4xl font-mono whitespace-nowrap animate-matrix"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              transform: 'translateY(-100%)'
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div
                key={j}
                style={{ animationDelay: `${j * 0.1}s` }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">EXPERIENCE_LOG</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            System Runtime History
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            [LOADING_DATA] Chronological record of operational deployments and system implementations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto md:w-1/2' : 'md:pl-8 md:ml-0 md:w-1/2'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute top-0 left-0 md:left-0 md:right-0 transform md:translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-25" />
                  <div className="relative w-8 h-8 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center">
                    <CircleDot className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="group relative ml-12 md:ml-0 animate-float"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Card Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300" />
                
                {/* Main Card */}
                <div className="relative bg-black border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-cyan-400/10 rounded text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-base">
                          <Building2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <div className="flex items-center gap-2 text-gray-400 font-mono">
                            <span>{exp.company}</span>
                            <span className="text-cyan-400/50">•</span>
                            <span className="text-cyan-400">{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-cyan-400 opacity-60">
                        {exp.code}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded text-xs font-mono
                      ${exp.status === 'CONTINUE' 
                        ? 'bg-green-400/10 text-green-400 border border-green-400/30' 
                        : 'bg-purple-400/10 text-purple-400 border border-purple-400/30'}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full mr-2 animate-pulse"
                        style={{
                          backgroundColor: exp.status === 'CONTINUE' ? '#4ade80' : '#a78bfa'
                        }}
                      />
                      STATUS: {exp.status}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-cyan-400">Key Responsibilities:</h4>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li 
                          key={idx}
                          className="relative pl-4 text-gray-400 text-sm group/item"
                        >
                          <span className="absolute left-0 top-[0.6rem] w-1 h-1 bg-cyan-400 rounded-full 
                                       group-hover/item:scale-150 transition-transform" />
                          <span className="group-hover/item:text-cyan-400 transition-colors">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-cyan-400/5 border border-cyan-400/20 
                                 rounded-md text-xs font-mono text-cyan-400
                                 hover:bg-cyan-400/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="absolute inset-0 -translate-y-full animate-scan bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg group-hover:border-cyan-400 transition-colors duration-300" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg group-hover:border-cyan-400 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg group-hover:border-cyan-400 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg group-hover:border-cyan-400 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 