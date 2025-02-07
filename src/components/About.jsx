import React from 'react';
import { Terminal, Code2, Cpu } from 'lucide-react';
import { FaReact, FaJava } from 'react-icons/fa';
import { SiSpring, SiSpringboot, SiMysql, SiCplusplus } from 'react-icons/si';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Developer",
      description: "Specialized in creating responsive and dynamic web applications using modern technologies and frameworks."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Java Developer",
      description: "Experienced in Java programming with a focus on building robust and efficient backend solutions."
    }
  ];

  const techStack = [
    { 
      icon: <FaReact className="w-12 h-12" />, 
      name: "React",
      color: "text-[#61DAFB]",
      glow: "hover:shadow-[0_0_15px_#61DAFB]"
    },
    { 
      icon: <FaJava className="w-12 h-12" />, 
      name: "Java",
      color: "text-[#f89820]",
      glow: "hover:shadow-[0_0_15px_#f89820]"
    },
    { 
      icon: <SiSpring className="w-12 h-12" />, 
      name: "Spring",
      color: "text-[#6DB33F]",
      glow: "hover:shadow-[0_0_15px_#6DB33F]"
    },
    { 
      icon: <SiSpringboot className="w-12 h-12" />, 
      name: "Spring Boot",
      color: "text-[#6DB33F]",
      glow: "hover:shadow-[0_0_15px_#6DB33F]"
    },
    { 
      icon: <SiMysql className="w-12 h-12" />, 
      name: "MySQL",
      color: "text-[#00A6E4]",
      glow: "hover:shadow-[0_0_15px_#00A6E4]"
    },
    { 
      icon: <SiCplusplus className="w-12 h-12" />, 
      name: "C++",
      color: "text-[#0086FF]",
      glow: "hover:shadow-[0_0_15px_#0086FF]"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(40deg,#000000,#1a1a1a,#000000)] opacity-80">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(transparent 1px, transparent 1px), linear-gradient(90deg, transparent 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: 'center center',
          animation: 'gradient-move 20s linear infinite'
        }} />
      </div>

      {/* Glowing Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30" />
        <div className="absolute top-0 left-[65%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">SYSTEM_PROFILE</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyan-400">
            About System
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            [LOADING_PROFILE] Analyzing core competencies and system specifications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Text */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="group relative">
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-black/50 border border-cyan-400 rounded-lg p-6 hover:border-cyan-400 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-400/10 rounded text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-400 tracking-wide">
                    <span className="relative">
                      System Overview
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient bg-300"></div>
                    </span>
                  </h3>
                </div>

                <div className="space-y-4 text-gray-400">
                  <p>
                    Software Developer with 6 months of experience in web development, specializing in creating efficient and user-friendly solutions. Passionate about building innovative web applications and staying current with emerging technologies.
                  </p>
                  <p>
                    Experienced in developing responsive websites and web applications using modern frameworks and best practices. Strong focus on clean code and optimal user experience.
                  </p>
                  <p>
                    Committed to continuous learning and professional growth in the ever-evolving field of Java development, with a focus on building scalable and efficient backend solutions.
                  </p>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg group-hover:border-cyan-400 transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative">
                {/* Card Background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-black/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-cyan-400/10 rounded text-cyan-400 group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Hover Scan Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full animate-scan" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="group relative">
            {/* Card Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
            
            {/* Card Content */}
            <div className="relative bg-black/50 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-400/10 rounded text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 tracking-wide">
                  <span className="relative">
                    Tech Stack
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient bg-300"></div>
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-between h-[120px] p-4 bg-black/80 rounded-lg border border-gray-800 group/tech hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 flex items-center justify-center ${tech.color} 
                                   group-hover/tech:scale-110 transition-all duration-300 ${tech.glow}`}>
                      {tech.icon}
                    </div>
                    <span className={`text-sm ${tech.color} font-medium text-center transition-colors`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Scan Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full animate-scan" />
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg group-hover:border-cyan-400 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg group-hover:border-cyan-400 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg group-hover:border-cyan-400 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg group-hover:border-cyan-400 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 