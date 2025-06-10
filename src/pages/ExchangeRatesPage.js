import React, { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CssBaseline,
  Container,
  Box
} from "@mui/material";
import axios from "axios";

const ExchangeRatesPage = () => {
  const [rates, setRates] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`)
      .then((res) => {
        setRates(res.data.conversion_rates || {});
      })
      .catch((err) => console.error("Error fetching exchange rates:", err));
  }, []);

  const rateEntries = Object.entries(rates);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            📊 Live Exchange Rates
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Base Currency: <strong>USD</strong>
          </Typography>
        </Box>

        <Paper elevation={4} sx={{ p: 2 }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "primary.main" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                    Currency
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#fff", fontWeight: "bold" }}>
                    Rate
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rateEntries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(([currency, rate], index) => (
                    <TableRow
                      key={currency}
                      sx={{
                        backgroundColor: index % 2 === 0 ? "background.default" : "background.paper"
                      }}
                    >
                      <TableCell>{currency}</TableCell>
                      <TableCell align="right">{rate.toFixed(4)}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={rateEntries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ mt: 2 }}
          />
        </Paper>
      </Container>
    </>
  );
};

export default ExchangeRatesPage;
