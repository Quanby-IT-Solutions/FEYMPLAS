import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#EDE1D1', // Primary 1
          2: '#2B271E', // Primary 2
        },
        secondary: {
          1: '#7F6044', // Secondary 1
          2: '#5D2410', // Secondary 2
          3: '#412E27', // Secondary 3
          4: '#2C2C2C', // Secondary 4
          5: '#6A704C', // Secondary 4
          6: '#CCB89D', // Secondary 4
        },
        // Adding black and white for the timeless palette
        'timeless-black': '#000000',
        'timeless-white': '#FFFFFF',
        // Adding creamy brown and green accents
        'accent-brown': '#D2B48C', // A creamy brown color
        'accent-green': '#2E8B57', // A warm green color
      },
      boxShadow: {
        'custom-shadow': '0px 4px 16px 0px #2B271E4D', // Custom shadow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
