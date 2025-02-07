import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Terminal, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Make sure the template is published in your EmailJS dashboard
    emailjs.sendForm(
      'service_czilwgn',  // Your service ID
      'template_l80casz', // Your template ID
      form.current,
      'KSR9aDtBP9iLPys4p' // Your public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#000000] opacity-80">
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
        <div className="absolute top-0 left-[65%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-400 rounded mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-sm text-cyan-400 tracking-wider">CONTACT_INTERFACE</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyan-400">
            Initialize Connection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            [SYSTEM_READY] Establish direct communication channel for collaboration and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in relative z-[1] h-full" style={{ animationDelay: "200ms" }}>
            <div className="group relative h-full">
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300 z-[1]" />
              
              {/* Card Content */}
              <div className="relative bg-black/50 border border-cyan-400 rounded-lg p-6 hover:border-cyan-400 transition-all duration-500 z-[2] h-full flex flex-col">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 tracking-wide relative z-[3] flex items-center gap-3">
                  <div className="p-2 bg-cyan-400/10 rounded text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="relative">
                    Communication Channels
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient bg-300"></div>
                  </span>
                </h3>
                <div className="space-y-8 relative z-[3] flex-grow py-4">
                  <div className="flex items-start group/item perspective-1000 hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-2">
                    <div className="p-3 bg-cyan-400/10 rounded text-cyan-400 group-hover/item:rotate-12 transition-transform relative z-[3] border border-transparent group-hover/item:border-cyan-400/50">
                      <Phone className="w-6 h-6 group-hover/item:animate-wave" />
                    </div>
                    <div className="ml-6 relative z-[3] preserve-3d group-hover/item:translate-x-2 transition-all duration-300">
                      <p className="text-sm text-cyan-400 font-mono relative mb-2">
                        <span className="absolute -left-4 opacity-0 group-hover/item:opacity-100 transition-opacity">&gt;</span>
                        PHONE_LINE
                      </p>
                      <p className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">+91 9023844654</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item perspective-1000 hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-2">
                    <div className="p-3 bg-cyan-400/10 rounded text-cyan-400 group-hover/item:rotate-12 transition-transform relative z-[3] border border-transparent group-hover/item:border-cyan-400/50">
                      <Mail className="w-6 h-6 group-hover/item:animate-wave" />
                    </div>
                    <div className="ml-6 relative z-[3] preserve-3d group-hover/item:translate-x-2 transition-all duration-300">
                      <p className="text-sm text-cyan-400 font-mono relative mb-2">
                        <span className="absolute -left-4 opacity-0 group-hover/item:opacity-100 transition-opacity">&gt;</span>
                        EMAIL_ADDRESS
                      </p>
                      <p className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">shivanishinde540@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item perspective-1000 hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-2">
                    <div className="p-3 bg-cyan-400/10 rounded text-cyan-400 group-hover/item:rotate-12 transition-transform relative z-[3] border border-transparent group-hover/item:border-cyan-400/50">
                      <MapPin className="w-6 h-6 group-hover/item:animate-wave" />
                    </div>
                    <div className="ml-6 relative z-[3] preserve-3d group-hover/item:translate-x-2 transition-all duration-300">
                      <p className="text-sm text-cyan-400 font-mono relative mb-2">
                        <span className="absolute -left-4 opacity-0 group-hover/item:opacity-100 transition-opacity">&gt;</span>
                        LOCATION_DATA
                      </p>
                      <p className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">Pune, 411048</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item perspective-1000 hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-2">
                    <div className="p-3 bg-cyan-400/10 rounded text-cyan-400 group-hover/item:rotate-12 transition-transform relative z-[3] border border-transparent group-hover/item:border-cyan-400/50">
                      <Github className="w-6 h-6 group-hover/item:animate-wave" />
                    </div>
                    <div className="ml-6 relative z-[3] preserve-3d group-hover/item:translate-x-2 transition-all duration-300">
                      <p className="text-sm text-cyan-400 font-mono relative mb-2">
                        <span className="absolute -left-4 opacity-0 group-hover/item:opacity-100 transition-opacity">&gt;</span>
                        GITHUB_PROFILE
                      </p>
                      <a 
                        href="https://github.com/shi2307van/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium group-hover/item:text-cyan-400 transition-colors inline-block hover:scale-105"
                      >
                        github.com/shi2307van
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start group/item perspective-1000 hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-2">
                    <div className="p-3 bg-cyan-400/10 rounded text-cyan-400 group-hover/item:rotate-12 transition-transform relative z-[3] border border-transparent group-hover/item:border-cyan-400/50">
                      <Linkedin className="w-6 h-6 group-hover/item:animate-wave" />
                    </div>
                    <div className="ml-6 relative z-[3] preserve-3d group-hover/item:translate-x-2 transition-all duration-300">
                      <p className="text-sm text-cyan-400 font-mono relative mb-2">
                        <span className="absolute -left-4 opacity-0 group-hover/item:opacity-100 transition-opacity">&gt;</span>
                        LINKEDIN_PROFILE
                      </p>
                      <a 
                        href="https://www.linkedin.com/in/shivanishinde540/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium group-hover/item:text-cyan-400 transition-colors inline-block hover:scale-105"
                      >
                        linkedin.com/in/shivanishinde540
                      </a>
                    </div>
                  </div>
                </div>

                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-gradient bg-300" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg group-hover:border-cyan-400 transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in h-full" style={{ animationDelay: "400ms" }}>
            <div className="group relative h-full">
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-black/50 border border-cyan-400 rounded-lg p-6 hover:border-cyan-400 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-400/10 rounded text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-400 tracking-wide relative">
                    <span className="relative">
                      Message Interface
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient bg-300"></div>
                    </span>
                  </h3>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10 flex-grow flex flex-col">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-mono text-cyan-400 mb-2">
                      USER_NAME
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      className="relative z-10 w-full px-4 py-3 bg-black/50 border border-cyan-400 rounded focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-mono text-cyan-400 mb-2">
                      EMAIL_ID
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      id="email"
                      className="relative z-10 w-full px-4 py-3 bg-black/50 border border-cyan-400 rounded focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="relative flex-grow">
                    <label htmlFor="message" className="block text-sm font-mono text-cyan-400 mb-2">
                      MESSAGE_CONTENT
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="relative z-10 w-full px-4 py-3 bg-black/50 border border-cyan-400 rounded focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors h-[140px] min-h-0 resize-none"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>

                  {/* Hidden Fields */}
                  <input type="hidden" name="to_name" value="Shivani" />

                  {/* Status Message */}
                  {submitStatus.message && (
                    <div className={`text-sm font-mono ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative z-10 group w-full inline-flex items-center justify-center px-6 py-3 bg-cyan-400/10 text-cyan-400 rounded overflow-hidden transition-all hover:bg-cyan-400 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center font-mono">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                          SENDING...
                        </>
                      ) : (
                        <>
                      <Send className="w-4 h-4 mr-2" />
                      TRANSMIT_MESSAGE
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-gradient bg-300" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
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
      </div>
    </section>
  );
};

export default Contact; 