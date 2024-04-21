import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const CallToActionButton = () => {
  const theme = useTheme();

  // Função para rolar até a seção desejada
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Button
      variant="contained"
      onClick={scrollToServices} // Adiciona o manipulador de cliques aqui
      sx={{
        backgroundColor: theme.palette.common.white,
        color: theme.palette.text.primary,
        padding: theme.spacing(1, 4),
        fontSize: "1rem",
        fontWeight: "bold",
        borderRadius: "20px",
        textTransform: "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
        "&:active": {
          boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      Saiba mais
    </Button>
  );
};

export default CallToActionButton;
