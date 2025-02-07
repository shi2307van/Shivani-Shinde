import { GraduationCap, Calendar, Award, Terminal } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BCA/Web Development",
      institution: "ZF Wadia Womens College",
      duration: "Mar 2023",
      grade: "First Class",
      code: "EDU_001",
      status: "COMPLETED"
    },
    {
      degree: "HSC",
      institution: "SGVS",
      duration: "2020",
      grade: "First Class",
      code: "EDU_002",
      status: "COMPLETED"
    },
    {
      degree: "SSC",
      institution: "MGVS",
      duration: "May 2018",
      grade: "First Class",
      code: "EDU_003",
      status: "COMPLETED"
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-black text-white overflow-hidden">
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
        <div className="absolute top-0 left-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">EDUCATION_DATA</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyan-400">
            System Training Modules
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            [LOADING_RECORDS] Academic initialization and knowledge acquisition protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-black/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-400/10 rounded text-cyan-400 group-hover:scale-110 transition-transform">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-wide text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-400 font-mono">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 opacity-60">
                    {edu.code}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Duration */}
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                    {edu.duration}
                  </div>

                  {/* Grade */}
                  <div className="flex items-center text-purple-400 text-sm">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="font-mono">{edu.grade}</span>
                  </div>

                  {/* Status Badge */}
                  <div className="pt-2">
                    <span className="inline-flex items-center px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded font-mono">
                      STATUS: {edu.status}
                    </span>
                  </div>
                </div>

                {/* Hover Scan Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full animate-scan" />
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-purple-400 rounded-tr-lg" />
                <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-purple-400 rounded-bl-lg" />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 