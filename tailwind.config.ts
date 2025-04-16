import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(0, 50%, 90%)',
				input: 'hsl(0, 50%, 95%)',
				ring: 'hsl(0, 100%, 50%)',
				background: 'hsl(0, 0%, 100%)',
				foreground: 'hsl(0, 50%, 20%)',
				primary: {
					DEFAULT: 'hsl(0, 100%, 50%)', // Bright Red
					foreground: 'hsl(0, 0%, 100%)'
				},
				secondary: {
					DEFAULT: 'hsl(10, 100%, 70%)', // Lighter Red (analogous)
					foreground: 'hsl(0, 0%, 100%)'
				},
				destructive: {
					DEFAULT: 'hsl(350, 100%, 50%)', // Slightly different red shade
					foreground: 'hsl(0, 0%, 100%)'
				},
				muted: {
					DEFAULT: 'hsl(0, 20%, 95%)', // Light pinkish-white
					foreground: 'hsl(0, 50%, 40%)'
				},
				accent: {
					DEFAULT: 'hsl(20, 100%, 75%)', // Warm analogous red
					foreground: 'hsl(0, 0%, 100%)'
				},
				popover: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(0, 50%, 20%)'
				},
				card: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(0, 50%, 20%)'
				},
				dealfindr: {
					blue: '#ea384c', // Replace blue with red
					'blue-dark': '#c91b33', // Darker red variant
					'blue-light': '#f05a5a', // Lighter red variant
					green: '#ea384c', // Green also replaced with red
					'green-light': '#f05a5a',
					'green-dark': '#c91b33',
					gray: '#fff4f4', // Very light pinkish-white
					'gray-dark': '#8c2b2b',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
