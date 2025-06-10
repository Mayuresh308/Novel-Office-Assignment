// src/themes.js
import { createTheme } from '@mui/material/styles';

export const baseThemes = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' },
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#90caf9' },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },
  }),
  coffee: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#6f4e37' },
      background: {
        default: '#3e2723',
        paper: '#4e342e',
      },
      text: {
        primary: '#fbe9e7',
      },
    },
  }),
  sunset: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#ff7043' },
      background: {
        default: '#fff3e0',
        paper: '#ffe0b2',
      },
    },
  }),
  ocean: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#0288d1' },
      background: {
        default: '#e0f7fa',
        paper: '#b2ebf2',
      },
    },
  }),
};
