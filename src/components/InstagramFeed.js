import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Container,
  IconButton,
  CardActionArea,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const instagramPageUrl = "https://www.instagram.com/esteticamilenasindeaux"; // Substitua pelo URL correto

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const accessToken =
        "IGQWRQMjFYdW8xM1RiWTkzdEJ4TFFpd3A1X3V0eExsNnNyZAUlhMWFRMGs2eEVQd0t4VnlUeEFmUThTcXFtUzROT254QTV1NG02TmpiRWppX3ZAPTkJGVC1aUmN4azhKcFFBYVlBZAVNORlhZATHY5NGFpLUE5VUFpV28ZD"; // Substitua por seu token de acesso real
      let postsArray = [];
      let url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${accessToken}`;

      try {
        // Continue buscando até que tenhamos 6 posts válidos ou a lista termine
        while (postsArray.length < 6) {
          const response = await fetch(url);
          const data = await response.json();
          if (!data || !data.data || data.data.length === 0) {
            break;
          }
          // Filtra posts válidos e adiciona ao array
          const validPosts = data.data.filter(
            (post) =>
              (post.media_type === "IMAGE" ||
                post.media_type === "CAROUSEL_ALBUM") &&
              post.media_url
          );
          postsArray.push(...validPosts);
          postsArray = postsArray.slice(0, 6); // Garante que só tenhamos até 6 posts
          if (data.paging && data.paging.next) {
            url = data.paging.next; // Prepara para a próxima página de resultados, se houver
          } else {
            break;
          }
        }
        setPosts(postsArray);
      } catch (error) {
        console.error("Erro ao buscar postagens do Instagram:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Função para verificar se a imagem carregou corretamente
  const handleImageError = (e) => {
    e.target.style.display = "none"; // Esconde a imagem quebrada
  };

  return (
    <Container id="instagram" sx={{ paddingBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Últimas Postagens
        <IconButton onClick={() => window.open(instagramPageUrl, "_blank")}>
          <InstagramIcon />
        </IconButton>
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea
                onClick={() => window.open(post.permalink, "_blank")}
              >
                <CardMedia
                  component="img"
                  image={post.media_url}
                  alt={post.caption || "Instagram post"}
                  sx={{ height: 194, objectFit: "cover" }}
                  onError={handleImageError} // Verificação de erro de imagem
                />
              </CardActionArea>
              <Typography
                variant="body2"
                color="text.secondary"
                padding={2}
                sx={{
                  flexGrow: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {post.caption}
              </Typography>
              {post.caption && post.caption.length > 100 && (
                <CardActionArea
                  onClick={() => window.open(post.permalink, "_blank")}
                >
                  <Typography
                    variant="body2"
                    sx={{ p: 2, textAlign: "center" }}
                  >
                    Ler mais
                  </Typography>
                </CardActionArea>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default InstagramFeed;
