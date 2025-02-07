/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // Pure white background
        text: '#1d1d1f', // Keeping the dark text for contrast
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'glitch': 'textGlitch 3s infinite',
        'matrix': 'matrixRain 3s linear infinite',
        'wave': 'wave 1.5s infinite',
        'expand': 'expand 1s ease-out forwards',
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glowPulse 2s infinite',
        'type': 'typewriter 4s steps(40) 1s forwards, blink 1s step-end infinite',
        'scan': 'scan 2s linear infinite',
        'moveY': 'moveY 3s linear infinite',
        'holoPulse': 'holoPulse 4s ease-in-out infinite',
        'holoScan': 'holoScan 2s linear infinite',
        'dataPulse': 'dataPulse 1.5s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'slideUp': 'slideUp 1s ease-out forwards',
        'slideDown': 'slideDown 1s ease-out forwards',
        'loading': 'loading 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        loading: {
          '0%': { width: '0%', marginLeft: '0%' },
          '50%': { width: '100%', marginLeft: '0%' },
          '100%': { width: '0%', marginLeft: '100%' },
        },
        textGlitch: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        expand: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        moveY: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        holoPulse: {
          '0%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
          '100%': { opacity: '0.3', transform: 'scale(1)' },
        },
        holoScan: {
          '0%': { transform: 'translateY(-100%) rotate(-45deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%) rotate(-45deg)', opacity: '0' },
        },
        dataPulse: {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0.5' },
        },
      },
      transitionDelay: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '900': '900ms',
        '1100': '1100ms',
        '1300': '1300ms',
        '1500': '1500ms',
      },
    },
  },
  plugins: [],
}

