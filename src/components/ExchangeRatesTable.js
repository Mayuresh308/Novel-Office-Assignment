import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import useExchangeRate from '../hooks/useExchangeRate';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, TablePagination
} from '@mui/material';

export default function ExchangeRatesTable() {
  const { currency } = useAppContext();
  const { rates, isLoading, error } = useExchangeRate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (isLoading || !rates) return null;
  if (error) return <Typography color="error">Failed to load exchange rates.</Typography>;

  const rateEntries = Object.entries(rates);
  const paginatedRates = rateEntries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Live Exchange Rates (Base: {currency.toUpperCase()})
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRates.map(([code, rate]) => (
            <TableRow key={code}>
              <TableCell>{code}</TableCell>
              <TableCell align="right">{rate.toFixed(4)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rateEntries.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Paper>
  );
}
