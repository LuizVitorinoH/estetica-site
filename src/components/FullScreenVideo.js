import React from "react";
import { Box } from "@mui/material";
import CallToActionButton from "./CallActionButton";

const FullScreenVideo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="home-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      {/* Conteúdo sobreposto, se necessário, como título e botão */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1>Estética Milena Sindeaux</h1>
        <h3>Descubra sua melhor versão.</h3>
        <CallToActionButton />
      </Box>
    </Box>
  );
};

export default FullScreenVideo;
