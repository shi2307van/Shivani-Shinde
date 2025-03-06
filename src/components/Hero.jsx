import profileImg from '../assets/didi_pofess-removebg.png';
import { FaReact, FaJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  const floatingIcons = [
    { Icon: FaReact, color: "text-cyan-400", top: "15%", left: "-5%", animationDelay: "0s" },
    { Icon: FaJs, color: "text-yellow-400", top: "75%", right: "-5%", animationDelay: "2s" },
    { Icon: SiTailwindcss, color: "text-cyan-400", bottom: "-5%", left: "50%", animationDelay: "1s" },
    { Icon: FaJava, color: "text-red-500", top: "-5%", left: "50%", animationDelay: "3s" },
  ];
  
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
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
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[90%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-500/20 rounded">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-cyan-400 tracking-wider">SYSTEM ONLINE</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-400 tracking-widest text-sm">[IDENTITY_VERIFIED]</p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="block text-white/80">I AM</span>
                  <span className="block mt-2 text-cyan-400">
                    SHIVANI SHINDE
                  </span>
                </h1>
              </div>

              <div className="flex items-center gap-4 text-xl">
                <div className="h-[1px] w-8 bg-cyan-400"></div>
                <p className="text-gray-400">ROLE:</p>
                <p className="text-cyan-400 font-mono">SOFTWARE_DEVELOPER</p>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20"></div>
                <p className="relative text-gray-400 max-w-xl text-lg leading-relaxed p-4 border border-cyan-500/20 rounded-lg bg-black/50">
                  Offering 6 months of progressive experience in writing web-based projects from concept and design through testing. Specialized in creating clean, efficient, and user-friendly solutions.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/17xnjam24uhc1Tef2dX5Cvf3JV8NPHTqi/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-cyan-400 text-black font-bold rounded overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">DOWNLOAD_CV.exe</span>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-4 border border-cyan-500/20 text-white font-bold rounded overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative group-hover:text-cyan-400 transition-colors">CONTACT_ME</span>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-16 lg:mt-20">
            <div className="w-full max-w-[500px] mx-auto">
              <div className="relative aspect-square">
                {/* Floating Icons */}
                {floatingIcons.map((item, index) => (
                  <div
                    key={index}
                    className="absolute z-10 animate-[float_6s_ease-in-out_infinite]"
                    style={{
                      top: item.top,
                      left: item.left,
                      right: item.right,
                      bottom: item.bottom,
                      animationDelay: item.animationDelay,
                    }}
                  >
                    <item.Icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                ))}
                
                {/* Main Image */}
                <div className="relative group">
                  {/* Main Container */}
                  <div className="overflow-hidden rounded-full border-8 border-cyan-400 bg-black/20">
                    {/* Image Wrapper */}
                    <div className="relative transform transition-all duration-700 ease-out
                                  hover:scale-110">
                {/* Image */}
                  <img
                    src={profileImg}
                    alt="Profile"
                        className="w-full h-full object-cover object-center"
                      />
                      
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 
                                    transition-opacity duration-700 bg-gradient-to-t 
                                    from-cyan-500/20 to-transparent"></div>
                </div>
                  </div>

                  {/* Highlight Ring */}
                  <div className="absolute -inset-1 rounded-full border border-cyan-400/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 