import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = ({ toggleColorMode }) => {
  const theme = useTheme();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Exchange rates (LIVE)', path: '/exchange-rates' },
    { label: 'About', path: '/about' },
    { label: 'Error Page', path: '/error' },
  ];

  const glassStyle = {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#1976d2',
        color: '#fff',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ minHeight: '64px' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontSize: '1.25rem',
          }}
        >
          Loan Calculator
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{
                textTransform: 'none',
                ...(location.pathname === item.path ? glassStyle : {}),
              }}
            >
              {item.label}
            </Button>
          ))}

          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            aria-label="toggle theme"
            sx={{ ml: 1 }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
