module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        green: {
          500: '#10B981',
          600: '#059669',
        },
        gray: {
          100: '#f7fafc',
          300: '#e2e8f0',
          600: '#4B5563',
        },
        limeGreen: '#00FF00', // For custom shadow or glow uses
        'glow-start': '#ff007f', // Glow color start
        'glow-end': '#ff9900', // Glow color end
      },
      animation: {
        glow: 'glow 3s linear infinite', // Slower animation for better effect
      },
      keyframes: {
        glow: {
          '0%': {
            backgroundPosition: '-200% center',
          },
          '50%': {
            backgroundPosition: '200% center',
          },
          '100%': {
            backgroundPosition: '-200% center',
          },
        },
      },
      boxShadow: {
        'lime-green': '0 0 5px rgba(0, 255, 0, 0.2), 0 0 30px rgba(0, 255, 0, 0.2)', // Custom shadow
      },
    },
  },
  plugins: [],
};
