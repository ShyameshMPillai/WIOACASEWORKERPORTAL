/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  // Add the 'from' option to resolve the @config directive issue
  from: undefined,
};

export default config;
