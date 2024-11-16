import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1a1a1a',
    background: '#ffffff',
    text: '#333333',
    accent: '#e2e8f0',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
  },
  fonts: {
    main: 'Arial, sans-serif',
    code: 'Courier, monospace',
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
    body: '1rem',
    small: '0.875rem',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
  },
  buttons: {
    primary: {
      background: '#0070f3',
      color: '#ffffff',
      hover: {
        background: '#005bb5',
        color: '#ffffff',
      },
    },
    secondary: {
      background: '#1a1a1a',
      color: '#ffffff',
      hover: {
        background: '#333333',
        color: '#ffffff',
      },
    },
    success: {
      background: '#28a745',
      color: '#ffffff',
      hover: {
        background: '#218838',
        color: '#ffffff',
      },
    },
    danger: {
      background: '#dc3545',
      color: '#ffffff',
      hover: {
        background: '#c82333',
        color: '#ffffff',
      },
    },
  },
};

export { theme };
