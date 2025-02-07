import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "AJAX", "Responsive Web Design"],
      code: "FE_001"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["PHP", "MySQL", "Database Design"],
      code: "BE_002"
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "C", "C++", "PHP"],
      code: "PL_003"
    },
    {
      title: "CMS & Frameworks",
      icon: <Globe className="w-6 h-6" />,
      skills: ["WordPress", "React.js"],
      code: "CF_004"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Database Design", "Query Optimization"],
      code: "DB_005"
    },
    {
      title: "Other Skills",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Version Control (Git)", "RESTful APIs", "Problem Solving"],
      code: "OS_006"
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-black text-white overflow-hidden">
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
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">SKILLS_MATRIX</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyan-400">
            Technical Proficiencies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            [SYSTEM_STATUS: Operational] Comprehensive analysis of acquired technical capabilities and expertise levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative animate-fade-in transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: (index * 150) + "ms" }}
            >
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-black/50 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400/40 transition-all duration-300 h-[250px] flex flex-col backdrop-blur-sm group-hover:bg-black/60">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-400/10 rounded text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {category.icon}
                    </div>
                    <div className="transform transition-all duration-300 group-hover:translate-x-1">
                      <h3 className="text-lg font-semibold tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400/60 group-hover:text-cyan-400/90 transition-colors">
                        {category.code}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex} 
                        className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-300 pl-2 transform group-hover:translate-x-2"
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-transform" />
                        <span className="text-sm group-hover:text-cyan-400/90">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Scan Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[scan_3s_ease-in-out_infinite]" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 