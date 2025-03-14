import React from "react";
import {
  Grid,
  Card,
  Typography,
  Container,
  CardActionArea,
  CardContent,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link"; // Para representar o Linktree

function SocialMediaCards() {
  const socialMedia = [
    {
      name: "Instagram",
      description: "Acompanhe nossas postagens e novidades no Instagram.",
      icon: "./instagram.png",
      link: "https://www.instagram.com/esteticamilenasindeaux", // Coloque o seu link aqui
    },
    {
      name: "Facebook",
      description: "Curta nossa página no Facebook e fique por dentro.",
      icon: "./facebook.png",      
      link: "https://www.facebook.com/esteticamilenasindeaux", // Coloque o seu link aqui
    },
    {
      name: "Linktree",
      description: "Acesse todos os nossos links através do Linktree.",
      icon: "./linktr.png",      
      link: "https://linktr.ee/esteticamilenasindeaux", // Coloque o seu link aqui
    },
  ];

  return (
    <Container id="socialmedia" sx={{ paddingBottom: 4, paddingTop: 8}}>
      {/* <Typography variant="h4" gutterBottom>
        Últimas Postagens
      </Typography> */}

      <Grid container spacing={2}>
        {socialMedia.map((social, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <CardActionArea onClick={() => window.open(social.link, "_blank")}>
                {/* Ícone */}
                <img
                  src={social.icon}
                  alt={social.name}
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "contain",
                    // marginBottom: "1rem",
                  }}
                />

                {/* Conteúdo */}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {social.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {social.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SocialMediaCards;
