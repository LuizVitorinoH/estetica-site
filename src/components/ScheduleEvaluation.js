import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

function ScheduleEvaluation() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const encodeMessage = (name, message) => {
    return encodeURIComponent(`Olá, meu nome é ${name}. ${message}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsAppMessage = encodeMessage(name, message);
    const phoneNumber = "5511948155914"; // Substitua pelo número do WhatsApp da estética

    // Verifica se o dispositivo é móvel
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Constrói a URL do WhatsApp de acordo com o dispositivo
    const whatsAppURL = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${whatsAppMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${whatsAppMessage}`;

    window.open(whatsAppURL, "_blank");
  };

  return (
    <Container maxWidth="sm" id="evaluation" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Agende sua avaliação
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Mensagem"
          fullWidth
          variant="outlined"
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Enviar via WhatsApp
        </Button>
      </form>
    </Container>
  );
}

export default ScheduleEvaluation;
