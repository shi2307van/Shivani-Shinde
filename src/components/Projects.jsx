import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import travelImg from '../assets/travel-hero.jpg';
import booklyImg from '../assets/bookly-hero.jpg';
import quizImg from '../assets/quiz-hero.jpg';
import shopifyImg from '../assets/shopify-hero.jpg';
import bbmsImg from '../assets/bbms-hero.jpg';

const Projects = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    image: null,
    isClosing: false
  });

  const openModal = (image) => {
    console.log('Opening modal with image:', image);
    setModalState({
      isOpen: true,
      image: image,
      isClosing: false
    });
  };

  const closeModal = () => {
    console.log('Closing modal');
    setModalState(prev => ({
      ...prev,
      isClosing: true
    }));
    
    // Wait for animation to finish before fully closing
    setTimeout(() => {
      setModalState({
        isOpen: false,
        image: null,
        isClosing: false
      });
    }, 200); // Match this with the modalFadeOut animation duration
  };

  const projects = [
    {
      title: "BBMS",
      description: "Developed a comprehensive Blood Bank Management System with user authentication and camp management. Features include donor registration, blood camp scheduling, donor list viewing, profile management, emergency blood request system, and real-time blood availability tracking. Users can register for camps, update profiles, and submit urgent blood requests.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Healthcare"],
      type: "Full Stack Development",
      code: "PRJ_001",
      image: bbmsImg,
      liveDemo: "https://bbms-sable-omega.vercel.app/",
      sourceCode: "https://github.com/shi2307van/BBMS/tree/my-new-branch"
    },
    {
      title: "Shopify",
      description: "Developed a full-stack e-commerce platform with user authentication, product management, and order processing. Features include user registration, product filtering, cart management, and an admin dashboard for product and order management.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "E-commerce"],
      type: "Full Stack Development",
      code: "PRJ_002",
      image: shopifyImg,
      liveDemo: "https://e-commerce-website-sable-omega.vercel.app/",
      sourceCode: "https://github.com/shi2307van/E-commerce-website/tree/my-new-branch"
    },
    {
      title: "Bookly",
      description: "Developed a website to sell books using HTML, CSS, and JavaScript. Created a user-friendly interface with features of searching and filtering, so the user can go through an enhanced searching form.",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "Web Development",
      code: "PRJ_003",
      image: booklyImg,
      liveDemo: "https://bookst.netlify.app/",
      sourceCode: "https://github.com/shi2307van/Bookliy.com/tree/my-new-branch"
    },
    {
      title: "Travel.com",
      description: "Design a dynamic ticket booking website using HTML, CSS, and JavaScript, through which a user can online book his travel tickets. Integrated user-friendly navigation and real time booking updates.",
      tags: ["HTML", "CSS", "JavaScript", "Dynamic UI"],
      type: "Web Development",
      code: "PRJ_004",
      image: travelImg,
      liveDemo: "https://traveldey.netlify.app/",
      sourceCode: "https://github.com/shi2307van/Travel.com/tree/my-new-branch"
    },
    {
      title: "Quiz App",
      description: "Developed an interactive quiz application using HTML, CSS, JavaScript. Features include multiple quiz categories, real-time scoring, progress tracking, and a leaderboard system.",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "Web Development",
      code: "PRJ_005",
      image: quizImg,
      liveDemo: "https://quizeapp-sigma.vercel.app/",
      sourceCode: "https://github.com/shi2307van/Quiz.com/tree/my-new-branch"
    }
  ];

  return (
    <>
    <section id="projects" className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(40deg,#000000,#1a1a1a,#000000)] opacity-80 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(transparent 1px, transparent 1px), linear-gradient(90deg, transparent 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: 'center center',
          animation: 'gradient-move 20s linear infinite'
        }} />
      </div>

      {/* Glowing Lines */}
        <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

        {/* Content Container */}
        <div className="relative z-10">
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">PROJECT_ARCHIVE</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyan-400">
            System Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            [LOADING_PROJECTS] Displaying collection of executed programs and development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
                  className="group relative animate-fade-in h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300 z-[1]" />
              
              {/* Card Content */}
                  <div className="relative bg-black/50 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-colors h-full flex flex-col z-[2]">
                    {/* Project Image */}
                    {project.image && (
                      <div 
                        className="relative w-full h-48 overflow-hidden flex-shrink-0 cursor-pointer z-[3]"
                        onClick={() => {
                          console.log('Image clicked:', project.title);
                          openModal(project.image);
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow z-[3]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-400/10 rounded text-cyan-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-wide text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 opacity-60">
                    {project.code}
                  </span>
                </div>

                {/* Project Type */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded">
                    {project.type}
                  </span>
                </div>

                {/* Description */}
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-400/10 text-purple-400 text-xs rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                      <div className="flex space-x-4 mt-auto">
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/source relative inline-flex items-center px-6 py-2 overflow-hidden rounded-md z-[5]"
                        >
                          {/* Sliding background */}
                          <div className="absolute inset-0 translate-x-[100%] group-hover/source:translate-x-0 transition-transform duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80" />
                          
                          {/* Border */}
                          <div className="absolute inset-0 border border-cyan-400/50 rounded-md" />
                          
                          {/* Content */}
                          <Github className="w-4 h-4 mr-2 text-cyan-400 group-hover/source:text-white relative transition-colors duration-300" />
                          <span className="text-sm font-semibold text-cyan-400 group-hover/source:text-white relative transition-colors duration-300">
                            Source_Code
                          </span>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 opacity-0 group-hover/source:opacity-100 duration-1000 transition-opacity">
                            <div className="absolute inset-0 translate-x-[-100%] group-hover/source:translate-x-[100%] transition-transform duration-1000 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </div>
                          
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover/source:opacity-100 transition-opacity duration-300 rounded-tl" />
                          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 opacity-0 group-hover/source:opacity-100 transition-opacity duration-300 rounded-tr" />
                          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400 opacity-0 group-hover/source:opacity-100 transition-opacity duration-300 rounded-bl" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover/source:opacity-100 transition-opacity duration-300 rounded-br" />
                  </a>
                  <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/demo relative inline-flex items-center px-6 py-2 overflow-hidden rounded-md z-[5]"
                        >
                          {/* Sliding background */}
                          <div className="absolute inset-0 translate-x-[100%] group-hover/demo:translate-x-0 transition-transform duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80" />
                          
                          {/* Border */}
                          <div className="absolute inset-0 border border-cyan-400/50 rounded-md" />
                          
                          {/* Content */}
                          <ExternalLink className="w-4 h-4 mr-2 text-cyan-400 group-hover/demo:text-white relative transition-colors duration-300" />
                          <span className="text-sm font-semibold text-cyan-400 group-hover/demo:text-white relative transition-colors duration-300">
                            Live_Demo
                          </span>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 opacity-0 group-hover/demo:opacity-100 duration-1000 transition-opacity">
                            <div className="absolute inset-0 translate-x-[-100%] group-hover/demo:translate-x-[100%] transition-transform duration-1000 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </div>
                          
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300 rounded-tl" />
                          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300 rounded-tr" />
                          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300 rounded-bl" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300 rounded-br" />
                        </a>
                      </div>
                </div>

                {/* Hover Scan Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-[1]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full animate-scan" />
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
      </div>
    </section>

      {/* Modal */}
      {modalState.isOpen && modalState.image && (
        <div 
          className={`fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center ${modalState.isClosing ? 'modal-exit' : 'modal-enter'}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
          onClick={closeModal}
        >
          <div 
            className={`relative max-w-[50%] max-h-[75vh] bg-black/50 p-3 rounded-lg transform transition-transform duration-300 ${modalState.isClosing ? 'scale-95' : 'scale-100'}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-8 right-0 text-white hover:text-cyan-400 text-3xl transition-all duration-300 hover:scale-110"
            >
              ×
            </button>
            <img
              src={modalState.image}
              alt="Project Preview"
              className={`w-full max-h-[65vh] object-contain rounded-lg shadow-2xl transition-all duration-300 ${modalState.isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects; 