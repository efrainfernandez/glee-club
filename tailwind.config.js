
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fa',
        'secondary-container': '#fcd400',
        'secondary-fixed': '#ffe16d',
        'primary-fixed': '#ffdadb',
        tertiary: '#00423e',
        'on-secondary-fixed': '#221b00',
        'surface-dim': '#d9dadb',
        'surface-container-low': '#f3f4f5',
        surface: '#f8f9fa',
        'on-surface': '#191c1d',
        'surface-container-lowest': '#ffffff',
        'surface-variant': '#e1e3e4',
        'on-primary-fixed': '#40000f',
        'tertiary-fixed-dim': '#59dad1',
        'outline-variant': '#e2bec0',
        'primary-fixed-dim': '#ffb2b8',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        'inverse-primary': '#ffb2b8',
        'on-secondary': '#ffffff',
        'inverse-on-surface': '#f0f1f2',
        'on-surface-variant': '#5a4042',
        'on-primary-fixed-variant': '#91002d',
        'surface-container-highest': '#e1e3e4',
        'surface-tint': '#b81840',
        'on-secondary-container': '#6e5c00',
        secondary: '#705d00',
        'error-container': '#ffdad6',
        'tertiary-container': '#005b57',
        'on-tertiary-container': '#56d7ce',
        'on-primary': '#ffffff',
        'secondary-fixed-dim': '#e9c400',
        'inverse-surface': '#2e3132',
        outline: '#8e7071',
        'surface-bright': '#f8f9fa',
        'on-tertiary-fixed': '#00201e',
        'on-primary-container': '#ffafb5',
        'surface-container': '#edeeef',
        'primary-container': '#a50034',
        'tertiary-fixed': '#79f6ed',
        'surface-container-high': '#e7e8e9',
        'on-secondary-fixed-variant': '#544600',
        'on-tertiary-fixed-variant': '#00504c',
        'on-background': '#191c1d',
        primary: '#a50034',
        'on-tertiary': '#ffffff',
        error: '#ba1a1a'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        'display-lg-mobile': ['Montserrat', 'sans-serif'],
        'ui-button': ['Montserrat', 'sans-serif'],
        'display-lg': ['Montserrat', 'sans-serif'],
        'body-lg': ['EB Garamond', 'serif'],
        'headline-md': ['Montserrat', 'sans-serif'],
        'body-md': ['EB Garamond', 'serif'],
        'label-bold': ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'display-lg-mobile': ['36px', { lineHeight: '1.1', fontWeight: '800' }],
        'ui-button': ['16px', { lineHeight: '1.0', fontWeight: '600' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'body-md': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-bold': ['14px', { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '700' }]
      }
      ,
      spacing: {
        'container-padding': '24px',
        base: '8px',
        'section-gap': '80px',
        'card-gap': '20px'
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px'
      }
    },
  },
  plugins: [],
}
