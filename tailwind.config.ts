import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			matrix: {
				black: '#0d0208',
				black2: '0a0a0a', // Digital Black
				darkGreen: '003b00', // Dark green
				medGreen: '008f11', // Medium green
				neonGreen: '00ff41', // Neon green
				brightGreen: '00ff00', // Bright green
				forrestGreen: '003b00', // Dark Forrest Green (use for backgrounds)
				emeraldGreen: '1a3324', // Emerald Green Overlay
				blue: '2e3d49', // Cold Steel Blue for accents
				gray: '3a3a3a', // Charcoal Gray (non important text and background details)
				redPill: 'ff0000', // Bright read for button and important interactive elements
				bluepill: '1a2a6b', // Blue pill for accents and interactive elements
				copper: '9c4f2e', // Muted Copper for warm contrasts
				
			},
			transparent: 'transparent',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			"appear": {
				from: {
					opacity: "0",
				},
				to: {
					opacity: "1",
				},
			},
			"slide":{
				from: {
					"transform": "translateX(100%)",
				},
				to: {
					"transform": "translateX(0%)",
				},
			},
		},
		animations: {
			"appear": "appear 1s ease-in-out",
			"slide": "slide 750ms ease-in-out",
		},
		screens: {
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require("@tailwindcss/typography"),
	require("@tailwindcss/forms"),
	require("@tailwindcss/aspect-ratio"),
	require("@tailwindcss/container-queries"),
],
} satisfies Config;
