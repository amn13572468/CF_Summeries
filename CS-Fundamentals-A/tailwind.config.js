// Scan application markup and scripts so Tailwind emits only the classes in use.
module.exports = {
  content: [
    "./index.html",
    "./*.js",
    "./screens/**/*.js",
    "./content/**/*.js",
    "./utils/**/*.js"
  ],
  theme: {
    // Add project-specific design tokens here while retaining Tailwind defaults.
    extend: {}
  },
  // No additional Tailwind plugins are currently required.
  plugins: []
};