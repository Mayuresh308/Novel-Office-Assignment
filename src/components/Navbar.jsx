import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Select,
  MenuItem,
  useTheme
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = ({ currentTheme, setThemeName }) => {
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
        bgcolor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
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

          <Select
            size="small"
            value={currentTheme}
            onChange={(e) => setThemeName(e.target.value)}
            sx={{ color: 'inherit', borderColor: 'inherit', ml: 2 }}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="coffee">Coffee</MenuItem>
            <MenuItem value="sunset">Sunset</MenuItem>
            <MenuItem value="ocean">Ocean</MenuItem>
          </Select>

          <IconButton
            onClick={() => setThemeName(currentTheme === 'dark' ? 'light' : 'dark')}
            color="inherit"
            aria-label="toggle theme"
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
