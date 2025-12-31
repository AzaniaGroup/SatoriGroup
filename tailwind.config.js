/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF5',
        copper: '#B85C38',
        'dark-brown': '#2C1E1A',
        'champagne-gold': '#E0A96D',
        charcoal: '#343434',
        border: '#E8E0D4',
        input: '#F5F1E8',
        ring: '#B85C38',
        background: '#FDFBF5',
        foreground: '#2C1E1A',
        primary: {
          DEFAULT: '#B85C38',
          foreground: '#FDFBF5',
        },
        secondary: {
          DEFAULT: '#E0A96D',
          foreground: '#2C1E1A',
        },
        muted: {
          DEFAULT: '#F5F1E8',
          foreground: '#343434',
        },
        accent: {
          DEFAULT: '#E0A96D',
          foreground: '#2C1E1A',
        },
        card: {
          DEFAULT: '#FDFBF5',
          foreground: '#2C1E1A',
        },
        popover: {
          DEFAULT: '#FDFBF5',
          foreground: '#2C1E1A',
        },
      },
      borderRadius: {
        lg: '0',
        md: '0',
        sm: '0',
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
        sans: ['Oswald', 'sans-serif'], // Primary visual font is Oswald
        body: ['EB Garamond', 'serif'], // Content font
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      },
    },
  },
  plugins: [],
}