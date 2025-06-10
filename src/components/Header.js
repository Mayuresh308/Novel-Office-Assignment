import React from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Switch, Box
} from "@mui/material";
import { useAppContext } from '../context/AppContext';

export default function Header() {
  const { themeMode, setThemeMode } = useAppContext(); // ✅ fixed

  const toggleTheme = () => setThemeMode(t => (t === "light" ? "dark" : "light"));

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Loan Calculator</Typography>
        <Box>
          <Typography component="span" variant="body2">Dark Mode</Typography>
          <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
