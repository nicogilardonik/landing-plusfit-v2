/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Premium Palette
        brand: {
          lime: "#ccff00", // High-voltage Neon Lime
          yellow: "#FACC15", // Logo Yellow (Standard Tailwind Yellow-400 matches previous usage)
          black: "#0a0a0a", // Deepest Black
          dark: "#121212", // Soft Black
          gray: "#1f1f1f", // Surface Gray
          white: "#ffffff",
          blue: "#001a33", // Deep Premium Blue for backgrounds
        },
        accent: {
          purple: "#A855F7",
          blue: "#3B82F6",
          glow: "rgba(204, 255, 0, 0.5)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["ApexPro", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "premium-gradient":
          "radial-gradient(circle at center, rgba(0,26,51,0.4) 0%, rgba(10,10,10,1) 70%)",
        "glass-dark":
          "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        "slow-zoom": "slowZoom 20s infinite alternate",
        marquee: "marquee 25s linear infinite",
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s infinite",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        reveal: "reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
      keyframes: {
        slowZoom: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(250, 204, 21, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(250, 204, 21, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
    },
  },
  plugins: [],
};
