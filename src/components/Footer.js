import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 Estética Avançada Milena Sindeaux. Todos os direitos
          reservados.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          Powered by Vizech
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
