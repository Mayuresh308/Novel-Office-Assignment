import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  CssBaseline,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emiUSD, setEmiUSD] = useState(null);
  const [convertedEMI, setConvertedEMI] = useState(null);
  const [amortizationUSD, setAmortizationUSD] = useState([]);
  const [convertedAmortization, setConvertedAmortization] = useState([]);
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`)
      .then((res) => setRates(res.data.conversion_rates || {}))
      .catch((err) => console.error("Error fetching exchange rates:", err));
  }, []);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseInt(loanTerm);

    if (!P || !annualRate || !years) return;

    const R = annualRate / 12 / 100;
    const N = years * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmiUSD(emi.toFixed(2));

    let balance = P;
    let schedule = [];

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;

      schedule.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setAmortizationUSD(schedule);
    convertToCurrency(currency, emi, schedule);
  };

  const convertToCurrency = (selectedCurrency, emiUSDValue, amortizationData) => {
    if (selectedCurrency === 'USD') {
      setConvertedEMI(emiUSDValue.toFixed(2));
      setConvertedAmortization(amortizationData);
      return;
    }

    const rate = rates[selectedCurrency] || 1;
    setConvertedEMI((emiUSDValue * rate).toFixed(2));

    const converted = amortizationData.map(row => ({
      ...row,
      principal: (parseFloat(row.principal) * rate).toFixed(2),
      interest: (parseFloat(row.interest) * rate).toFixed(2),
      balance: (parseFloat(row.balance) * rate).toFixed(2),
    }));

    setConvertedAmortization(converted);
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);

    if (emiUSD && amortizationUSD.length > 0) {
      convertToCurrency(newCurrency, emiUSD, amortizationUSD);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Loan Amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Interest Rate (%)"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Term (Years)"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              variant="outlined"
            />
            <Button variant="contained" onClick={calculateEMI}>
              Calculate
            </Button>
          </Box>
        </Paper>

        {emiUSD && (
          <Paper
            elevation={3}
            sx={{
              p: 2,
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              💰 Monthly EMI: ${emiUSD}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <FormControl size="small">
                <InputLabel>Currency</InputLabel>
                <Select value={currency} label="Currency" onChange={handleCurrencyChange}>
                  {Object.keys(rates).map((cur) => (
                    <MenuItem key={cur} value={cur}>
                      {cur}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography>
                Converted EMI: {convertedEMI} {currency}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              📅 Amortization Schedule ({currency})
            </Typography>

            {/* 👇 SCROLLABLE table area with sticky header */}
            <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell><strong>Month</strong></TableCell>
                    <TableCell><strong>Principal</strong></TableCell>
                    <TableCell><strong>Interest</strong></TableCell>
                    <TableCell><strong>Remaining Balance</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {convertedAmortization.map((row) => (
                    <TableRow key={row.month}>
                      <TableCell>{row.month}</TableCell>
                      <TableCell>{row.principal} {currency}</TableCell>
                      <TableCell>{row.interest} {currency}</TableCell>
                      <TableCell>{row.balance} {currency}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        )}
      </Container>
    </>
  );
};

export default Home;
