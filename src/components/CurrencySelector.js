import React, { useContext } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import useExchangeRate from '../hooks/useExchangeRate';

export default function CurrencySelector() {
  const { currency, setCurrency } = useAppContext();
  const { rates, isLoading, error } = useExchangeRate();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  if (isLoading || !rates) return null;
  if (error) return <div>Error loading exchange rates.</div>;

  return (
    <FormControl fullWidth sx={{ my: 2 }}>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select
        labelId="currency-select-label"
        value={currency}
        label="Currency"
        onChange={handleChange}
      >
        {Object.keys(rates).map((code) => (
          <MenuItem key={code} value={code}>
            {code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
