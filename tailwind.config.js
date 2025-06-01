export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this dummy path to trick the compiler into keeping all classes
    "./dummy/**/*.*"
  ],
  safelist: [
    'bg-coyote', 'text-ops-text', 'bg-olive-drab', 'bg-camouflage', 'bg-khaki'
  ],
  theme: {
    extend: {
      colors: {
        'desert-sand': '#EDC9AF',
        'olive-drab': '#6B8E23',
        'coyote': '#81613C',
        'camouflage': '#78866B',
        'khaki': '#F0E68C',
        'ops-black': '#0B0B0B',
        'ops-text': '#E5E5DC'
      },
    },
  },
  plugins: [],
}
