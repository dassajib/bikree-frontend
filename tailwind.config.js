// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      },
      boxShadow: {
        'custom-shadow': '5px 20px 50px #000',
      },
    },
  },
  plugins: [],
};
