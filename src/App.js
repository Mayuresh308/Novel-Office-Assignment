import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import Navbar from './components/Navbar';
import { baseThemes } from './themes';
import LoanCalculator from './pages/LoanCalculator';

function App() {
  const [themeName, setThemeName] = useState('light');

  const theme = useMemo(() => baseThemes[themeName] || baseThemes.light, [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar currentTheme={themeName} setThemeName={setThemeName} />
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
}

export default App;
