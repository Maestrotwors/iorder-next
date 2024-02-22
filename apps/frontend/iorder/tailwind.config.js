const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    screens: {
      'sm-mobile': `var(--screen-small-mobile)`,
      mobile: `var(--screen-mobile)`,
      tablet: `var(--screen-small-tablet)`,
      desktop: `var(--screen-desktop)`,
    },
  },
  plugins: [require('daisyui')],
};
