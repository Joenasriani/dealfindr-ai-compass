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
				border: '#8E9196',
				input: '#8E9196',
				ring: '#ea384c',
				background: '#FFFFFF',
				foreground: '#000000',
				primary: {
					DEFAULT: '#c0313d', 
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#8E9196', 
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#ea384c', 
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#8E9196', 
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#ea384c', 
					foreground: '#FFFFFF'
				},
				dealfindr: {
					blue: '#c0313d', 
					'blue-dark': '#8E9196', 
					'blue-light': '#FFFFFF', 
					green: '#c0313d', 
					'green-light': '#FFFFFF',
					'green-dark': '#8E9196',
					gray: '#FFFFFF', 
					'gray-dark': '#8E9196',
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
