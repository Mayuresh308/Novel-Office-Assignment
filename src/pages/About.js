import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Box sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography variant="h4" gutterBottom>
          📘 About This App
        </Typography>
        <Typography variant="body1" paragraph>
          This Loan Calculator App is a modern, single-page web application built using <strong>React JS</strong> and <strong>Material UI</strong>. It helps users:
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem><ListItemText primary="📌 Calculate EMIs (Equated Monthly Installments)" /></ListItem>
          <ListItem><ListItemText primary="📌 View detailed amortization schedules" /></ListItem>
          <ListItem><ListItemText primary="📌 Convert EMI values to other currencies using real-time exchange rates" /></ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          ⚙️ Features
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem><ListItemText primary="📈 Loan EMI calculation using financial formulas" /></ListItem>
          <ListItem><ListItemText primary="📊 Dynamic amortization schedule table" /></ListItem>
          <ListItem><ListItemText primary="🌍 Real-time currency conversion using ExchangeRate API" /></ListItem>
          <ListItem><ListItemText primary="📃 Paginated exchange rate table for 160+ currencies" /></ListItem>
          <ListItem><ListItemText primary="🌓 Dark/Light mode toggle" /></ListItem>
          <ListItem><ListItemText primary="📱 Fully responsive UI with collapsible mobile navigation" /></ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          🛠️ Technologies Used
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem><ListItemText primary="⚛️ React (Hooks, Routing, Context API)" /></ListItem>
          <ListItem><ListItemText primary="🎨 Material UI for responsive design" /></ListItem>
          <ListItem><ListItemText primary="📡 Axios for API communication" /></ListItem>
          <ListItem><ListItemText primary="💱 Exchange Rate API for live currency data" /></ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          🧮 EMI Formula
        </Typography>
        <Typography variant="body1" paragraph>
          EMI = [P × R × (1 + R)<sup>N</sup>] / [(1 + R)<sup>N</sup> - 1]
        </Typography>
        <Typography variant="body2">
          Where:
          <br />• P = Principal loan amount
          <br />• R = Monthly interest rate (annual rate / 12 / 100)
          <br />• N = Loan duration in months
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          🔗 Currency Conversion API
        </Typography>
        <Typography variant="body1" paragraph>
          This app integrates with the free tier of the ExchangeRate API to fetch live rates.
        </Typography>
        <Typography variant="body2" paragraph>
          Example endpoint:<br />
          <code>https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</code>
        </Typography>
        <Typography variant="body2" paragraph>
          You must register and obtain a free API key, then replace <strong>YOUR_API_KEY</strong> in the code with your actual key.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          📋 Instructions for Candidates
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem><ListItemText primary="✅ Push the project to a public GitHub repository" /></ListItem>
          <ListItem><ListItemText primary="✅ Commit regularly with clear messages" /></ListItem>
          <ListItem><ListItemText primary="✅ Use Context API for theme/currency state" /></ListItem>
          <ListItem><ListItemText primary="✅ Create reusable custom React hooks" /></ListItem>
          <ListItem><ListItemText primary="✅ Integrate ExchangeRate API properly" /></ListItem>
          <ListItem><ListItemText primary="✅ Ensure full responsiveness on all screens" /></ListItem>
          <ListItem><ListItemText primary="✅ Support dark and light themes using MUI" /></ListItem>
          <ListItem><ListItemText primary="✅ Add 404 and error pages for unmatched routes/errors" /></ListItem>
          <ListItem><ListItemText primary="✅ Deploy the app and link it in GitHub README" /></ListItem>
          <ListItem><ListItemText primary="✅ Write clean, modular, and structured code" /></ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          🎯 Purpose of This App
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem><ListItemText primary="🔧 Demonstrate React fundamentals (state, props, hooks)" /></ListItem>
          <ListItem><ListItemText primary="🧩 Show modular code and component reuse" /></ListItem>
          <ListItem><ListItemText primary="🌐 Integrate and render live API data" /></ListItem>
          <ListItem><ListItemText primary="📁 Handle pagination, tables, lists" /></ListItem>
          <ListItem><ListItemText primary="🎨 Theme switching and responsive design" /></ListItem>
          <ListItem><ListItemText primary="🚫 Graceful error handling (404, API errors)" /></ListItem>
          <ListItem><ListItemText primary="📱 Mobile-friendly collapsible navigation" /></ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default About;
