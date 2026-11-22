/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // O Tailwind 4 já gera os prefixos de navegador (não precisa de autoprefixer).
    '@tailwindcss/postcss': {},
  },
};

export default config;
