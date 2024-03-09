const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing: {
        2.75: '0.6875rem',
        4.5 : '1.125rem',
      }
    },
    colors: {
      neutral0: "#000000",
      neutral10: "#1C1B1F",
      neutral96: "#F7F2FA",
      primary40: "#6750A4",
      primary100: "#FFFFFF"
    },
    opacity: {
      12: "0.12",
      15: "0.15",
      38: "0.38",
      88: "0.88",
      92: "0.92"
    },
    boxShadow: {
      level0: "0px 0px 0px 0px, 0px 0px 0px 0px",
      level1: "0px 1px 3px 1px, 0px 1px 2px 0px",
      level2: "0px 2px 6px 2px, 0px 1px 2px 0px"
    },
    fontSize: {
      'display-lg': [
        '3.5625rem',
        {
          lineHeight: '4rem',
          fontWeight: '400',
          letterSpacing: '-0.015625rem',
        },
      ],
      'display-m': [
        '2.8125rem',
        {
          lineHeight: '3.25rem',
          fontWeight: '400',
          letterSpacing: '0',
        },
      ],
      'display-sm': [
        '2.25rem',
        {
          lineHeight: '2.75rem',
          fontWeight: '400',
          letterSpacing: '0',
        },
      ],
      'headline-lg': [
        '2rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '400',
          letterSpacing: '0',
        },
      ],
      'headline-m': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
          fontWeight: '400',
          letterSpacing: '0',
        },
      ],
      'headline-sm': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '400',
          letterSpacing: '0',
        },
      ],
      'title-lg': [
        '1.375rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '400',
          letterSpacing: '0',
        },
      ],
      'title-m': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500',
          letterSpacing: '0.009375rem',
        },
      ],
      'title-sm': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500',
          letterSpacing: '0.00625rem',
        },
      ],
      'label-lg': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500',
          letterSpacing: '0.00625rem',
        },
      ],
      'label-m': [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '500',
          letterSpacing: '0.03125rem',
        },
      ],
      'label-sm': [
        '0.6875rem',
        {
          lineHeight: '1rem',
          fontWeight: '500',
          letterSpacing: '0.03125rem',
        },
      ],
      'body-lg': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
          letterSpacing: '0.03125rem',
        },
      ],
      'body-m': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
          letterSpacing: '0.015625rem',
        },
      ],
      'body-sm': [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '400',
          letterSpacing: '0.025rem',
        },
      ],
    },
  },
  plugins: [],
};
