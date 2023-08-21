module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         maxWidth: {
            '8xl': '1440px', // max-width in figma
         },
         spacing: {
            7.5: '30px',
            18: '72px',
         },
         fontSize: {
            title: '13px',
            headline: '50px',
         },
         borderRadius: {
            xs: '4px',
         },
         lineHeight: {
            6.5: '25px',
         },
         backdropBlur: {
            jul: '5px',
         },
         fontFamily: {
            gridnik: ['var(--font-gridnik), sans'],
         },
         letterSpacing: {
            title: '0.25em',
         },
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
      },
   },
   plugins: [],
}
