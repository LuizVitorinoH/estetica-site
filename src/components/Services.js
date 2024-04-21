import React from "react";
import { Grid, Paper, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// Suponha que estas sejam as imagens correspondentes aos serviços
const serviceData = [
  {
    name: "Tratamento Facial",
    description:
      "Cuidados especiais para rejuvenescer e revitalizar a pele do seu rosto.",
    image: "/pele.png", // Substitua pelo caminho correto da imagem
  },
  {
    name: "Tratamento Corporal",
    description:
      "Tratamentos para todo o corpo, proporcionando bem-estar e beleza.",
    image: "/peso.png", // Substitua pelo caminho correto da imagem
  },
  {
    name: "Injetáveis",
    description:
      "Procedimentos com injetáveis para contornos, volume e redução de linhas de expressão.",
    image: "/botox.png", // Substitua pelo caminho correto da imagem
  },
];

const ServiceImage = styled("img")(({ theme }) => ({
  width: "100%", // Faz com que a imagem seja responsiva à largura do container
  height: "200px", // Define uma altura fixa para todas as imagens
  objectFit: "cover", // Garante que a imagem cubra o espaço disponível
  filter: "grayscale(100%)", // Começa em preto e branco
  transition: "filter 0.3s ease, transform 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    // Ajustes para telas menores
    height: "150px",
  },
  "&:hover": {
    filter: "none", // Remove o filtro para mostrar a cor ao passar o mouse
    transform: "scale(1.1)", // Aumenta ligeiramente a imagem
  },
}));
function Services() {
  return (
    <Container id="services" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Nossos Serviços
      </Typography>
      <Grid container spacing={4}>
        {serviceData.map((service) => (
          <Grid item key={service.name} xs={12} sm={6} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                "&:hover": {
                  // Aplica um sombreamento no Paper ao passar o mouse
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <ServiceImage src={service.image} alt={service.name} />
              <Typography variant="h6" component="h3">
                {service.name}
              </Typography>
              <Typography variant="subtitle1">{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
