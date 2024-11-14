import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        matrix: {
          dark: 'hsl(120, 100%, 2%)', // Base dark background for MatrixRain
          black: '#0d0208', // Deep void black
          digitalBlack: '#0a0a0a', // Digital display black
          darkGreen: '#003b00', // Dark Matrix green
          medGreen: '#008f11', // Medium Matrix green
          neonGreen: '#00ff41', // Classic Matrix neon green
          brightGreen: '#00ff00', // Bright system green
          forrestGreen: '#003b00', // Dark background green
          emeraldGreen: '#1a3324', // Overlay green
          blue: '#2e3d49', // Cold steel blue
          gray: '#3a3a3a', // Terminal gray
          redPill: '#e60000', // Slightly darker red
          redPillDark: '#cc0000', // For gradients
          bluePill: '#162555', // Slightly darker blue
          bluePillDark: '#111c40', // For gradients
          copper: '#9c4f2e', // Warm accent copper
        },
        transparent: 'transparent',
      },
      fontFamily: {
        anonymous: 'var(--font-anonymous-pro)', // Use for Titles and Main Headings
        roboto: 'var(--font-roboto-mono)', // Use for misc. body text
        shareTech: 'var(--font-share-tech-mono)', // Use for minor headings and main body text
        firaCode: 'var(--font-fira-code)', // Use for code blocks and other minor body text
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        appear: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slide: {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        glowing: {
          '0%': { boxShadow: '0 0 5px #ff0000' },
          '50%': { boxShadow: '0 0 20px #ff0000, 0 0 30px #ff0000' },
          '100%': { boxShadow: '0 0 5px #ff0000' },
        },
        glowingHover: {
          '0%': { boxShadow: '0 0 10px #ff0000' },
          '50%': { boxShadow: '0 0 30px #ff0000, 0 0 40px #ff0000' },
          '100%': { boxShadow: '0 0 10px #ff0000' },
        },
        'matrix-glow': {
          '0%': {
            boxShadow: '0 2px 4px rgba(255,0,0,0.2), 0 0 10px rgba(255,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)',
          },
          '50%': {
            boxShadow: '0 2px 8px rgba(255,0,0,0.3), 0 0 20px rgba(255,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
          },
          '100%': {
            boxShadow: '0 2px 4px rgba(255,0,0,0.2), 0 0 10px rgba(255,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)',
          },
        },
        'matrix-glow-intense': {
          '0%': {
            boxShadow: '0 2px 8px rgba(255,0,0,0.3), 0 0 20px rgba(255,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
          },
          '50%': {
            boxShadow:
              '0 4px 12px rgba(255,0,0,0.4), 0 0 30px rgba(255,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.4)',
          },
          '100%': {
            boxShadow: '0 2px 8px rgba(255,0,0,0.3), 0 0 20px rgba(255,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
          },
        },
      },
      animations: {
        appear: 'appear 1s ease-in-out',
        slide: 'slide 750ms ease-in-out',
        'matrix-glow': 'matrix-glow 2s ease-in-out infinite',
        'matrix-glow-intense': 'matrix-glow-intense 2s ease-in-out infinite',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config;
