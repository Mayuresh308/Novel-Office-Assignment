// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import { AppProvider, useAppContext } from './context/AppContext';
// import ExchangeRatesPage from './pages/ExchangeRatesPage';

// const AppContent = () => {
//   const { themeMode } = useAppContext();

//   const theme = createTheme({
//     palette: {
//       mode: themeMode,
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// };

// function App() {
//   return (
//     <AppProvider>
//       <AppContent />
//     </AppProvider>
//   );
// }

// export default App;










import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import Navbar from './components/Navbar';
import { AppProvider, useAppContext } from './context/AppContext';
import LoanCalculator from './pages/LoanCalculator';



const AppContent = () => {
  const { themeMode, toggleThemeMode } = useAppContext();

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#1976d2', // Your primary color
      },
      ...(themeMode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: themeMode === 'dark' ? '#1e1e1e' : '#1976d2',
            color: themeMode === 'dark' ? '#ffffff' : '#ffffff',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleColorMode={toggleThemeMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
           <Route path="/about" element={<About />} />
          <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;