import React, { useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useEMICalculation } from "../hooks/useEMICalculation";
import { useAppContext } from '../context/AppContext';

export default function Calculator({ onCalculate }) {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
const { currency } = useAppContext();
  const { emi, total, interest } = useEMICalculation({
    principal: Number(principal),
    annualRate: Number(rate),
    years: Number(years),
  });

  const handleSubmit = e => {
    e.preventDefault();
    onCalculate({ emi, total, interest });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display:"flex", gap:2, flexWrap:"wrap", p:2 }}>
      <TextField label="Loan Amount" fullWidth value={principal} onChange={e => setPrincipal(e.target.value)} />
      <TextField label="Interest Rate (%)" fullWidth value={rate} onChange={e => setRate(e.target.value)} />
      <TextField label="Term (Years)" fullWidth value={years} onChange={e => setYears(e.target.value)} />
      <Button variant="contained" type="submit" sx={{ alignSelf: "end" }}>Calculate</Button>
    </Box>
  );
}
