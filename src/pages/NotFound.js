import { Typography, Box, CssBaseline, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>404</Typography>
          <Typography variant="h5" gutterBottom>Page Not Found</Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ mt: 3 }}
          >
            Go Home
          </Button>
        </Box>
      </Container>
    </>
  );
}
