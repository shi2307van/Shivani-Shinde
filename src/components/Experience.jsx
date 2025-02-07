import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "PHP Developer",
      company: "Daydreamsoft Infotech",
      duration: "Nov 2022 - Apr 2023",
      responsibilities: [
        "Served as a crucial link between backend and client engineers, contributing to the creation of innovative solutions.",
        "Partnered with UX team in integrating user feedback and focus group data into UI design philosophies."
      ],
      code: "EXP_001",
      status: "COMPLETED"
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-black text-white overflow-hidden">
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
        <div className="absolute top-0 left-[40%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[60%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">EXPERIENCE_LOG</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyan-400">
            System Runtime History
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            [ACCESSING_RECORDS] Chronological data of operational deployments and system executions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-20"></div>

          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex flex-col md:flex-row items-start">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full">
                  <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400/20"></div>
                </div>
                
                {/* Content */}
                <div className="ml-16 md:ml-[calc(50%+2rem)] md:w-1/2">
                  <div className="group relative">
                    {/* Card Background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                    
                    {/* Card Content */}
                    <div className="relative bg-black/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white tracking-wide">
                          {experience.title}
                        </h3>
                        <span className="text-xs font-mono text-cyan-400 opacity-60">
                          {experience.code}
                        </span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center text-gray-400 mb-2 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                        {experience.duration}
                      </div>

                      {/* Company */}
                      <div className="flex items-center text-purple-400 mb-4 text-sm font-mono">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {experience.company}
                      </div>

                      {/* Status Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded font-mono">
                          STATUS: {experience.status}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, rIndex) => (
                          <li key={rIndex} className="text-gray-400 flex items-start text-sm">
                            <ChevronRight className="w-4 h-4 mr-2 mt-1 text-cyan-400 flex-shrink-0" />
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Hover Scan Effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full animate-scan" />
                      </div>
                    </div>
                  </div>
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