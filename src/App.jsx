import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

// Animated Section Wrapper Component
const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const variants = {
    hidden: { 
      y: 100,
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth entrance
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5
      }
    }
  };

  const loadingBarVariants = {
    start: {
      scaleX: 0,
      opacity: 0.8
    },
    end: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={loadingVariants}
      >
        <div className="text-center">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <motion.p
              className="text-sm text-cyan-400 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SYSTEM_INITIALIZING
            </motion.p>
          </motion.div>
          <div className="mt-4 space-y-2">
            <motion.div
              className="h-1 w-48 bg-gradient-to-r from-cyan-500 to-purple-500 rounded origin-left"
              variants={loadingBarVariants}
              initial="start"
              animate="end"
            />
            <motion.p
              className="text-cyan-400 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Loading System Components...
            </motion.p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-50 text-text">
      {/* Navbar with slide down animation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
      </motion.div>

      {/* Hero section with fade in animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero />
      </motion.div>

      {/* Other sections with scroll-triggered animations */}
      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Skills />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Experience />
      </AnimatedSection>

      <AnimatedSection>
        <Education />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </main>
  );
}

export default App