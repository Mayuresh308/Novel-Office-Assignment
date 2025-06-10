import React, { useContext } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useAppContext } from '../context/AppContext';

export default function EMIResult({ monthlyEMI, totalPayment, totalInterest }) {
  const { currency } = useAppContext();

  const formattedEMI = monthlyEMI ? monthlyEMI.toFixed(2) : "---";

  return (
    <Paper elevation={3} sx={{ p: 2, m: 2 }}>
      <Typography variant="h6">Your Monthly EMI ({currency}):</Typography>
      <Typography variant="h4" color="primary">{currency} {formattedEMI}</Typography>
      <Box mt={2}>
        <Typography>Total Payment: {currency} {totalPayment.toFixed(2)}</Typography>
        <Typography>Interest Paid: {currency} {totalInterest.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
}
