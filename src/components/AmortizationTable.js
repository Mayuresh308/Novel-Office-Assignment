import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination, Typography
} from '@mui/material';

const AmortizationTable = ({ schedule }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ marginTop: 4 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>Amortization Schedule</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Month</b></TableCell>
              <TableCell align="right"><b>Principal</b></TableCell>
              <TableCell align="right"><b>Interest</b></TableCell>
              <TableCell align="right"><b>Balance</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.month}</TableCell>
                <TableCell align="right">{row.principal.toFixed(2)}</TableCell>
                <TableCell align="right">{row.interest.toFixed(2)}</TableCell>
                <TableCell align="right">{row.balance.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[12, 24, 60]}
        component="div"
        count={schedule.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AmortizationTable;
