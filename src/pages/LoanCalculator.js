// src/pages/LoanCalculator.js
import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  CssBaseline,
  Container,
  MenuItem,
  Box,
  Select,
  FormControl,
  InputLabel
} from "@mui/material";

const currencyRates = {
  USD: 1,
  EUR: 0.85,
  INR: 82,
  GBP: 0.75,
  JPY: 110,
};

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(5);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [emi, setEmi] = useState(null);

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(termYears) * 12;
    const R = annualRate / 12 / 100;

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI);

    let balance = P;
    const amortization = [];

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principalPaid = EMI - interest;
      balance -= principalPaid;
      amortization.push({
        month: i,
        principal: principalPaid,
        interest,
        balance: balance < 0.01 ? 0 : balance
      });
    }

    setSchedule(amortization);
  };

  const handleReset = () => {
    setSchedule([]);
    setEmi(null);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Loan Calculator Dashboard
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              label="Loan Amount"
              variant="outlined"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              fullWidth
            />
            <TextField
              label="Interest Rate (%)"
              variant="outlined"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              fullWidth
            />
            <TextField
              label="Term (Years)"
              variant="outlined"
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="contained" size="large" onClick={handleCalculate}>
              CALCULATE
            </Button>
          </Box>
        </Paper>

        {emi && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Monthly EMI: ${(emi * currencyRates[currency]).toFixed(2)}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <FormControl>
                <InputLabel>Currency</InputLabel>
                <Select
                  value={currency}
                  label="Currency"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {Object.keys(currencyRates).map((cur) => (
                    <MenuItem key={cur} value={cur}>
                      {cur}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography>
                Converted EMI: {(emi * currencyRates[currency]).toFixed(2)} {currency}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleReset}
              >
                RESET TABLE
              </Button>
            </Box>

            <Paper elevation={1} sx={{ mt: 3 }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Month</strong></TableCell>
                      <TableCell><strong>Principal</strong></TableCell>
                      <TableCell><strong>Interest</strong></TableCell>
                      <TableCell><strong>Remaining Balance</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {schedule.map((row) => (
                      <TableRow key={row.month}>
                        <TableCell>{row.month}</TableCell>
                        <TableCell>{(row.principal * currencyRates[currency]).toFixed(2)} {currency}</TableCell>
                        <TableCell>{(row.interest * currencyRates[currency]).toFixed(2)} {currency}</TableCell>
                        <TableCell>{(row.balance * currencyRates[currency]).toFixed(2)} {currency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        )}
      </Container>
    </>
  );
};

export default LoanCalculator;
