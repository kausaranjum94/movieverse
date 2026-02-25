// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ important for React
  ],
  theme: {
    extend: {
      colors: {
        movieverse: {
          red: "#e50914",    
          yellow: "#f5c518", 
          dark: "#121212",  
          gray: "#1e1e1e",  
        },
      },
    },
  },
  plugins: [],
};
