import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const foto1 = "/foto1.png";
const foto2 = "/foto2.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function LocationSection() {
  const locationImages = [foto1, foto2];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const mapSrc =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyB1Vkg3EYIdK1Z933UWCmMEkOoHDiOixQU&q=R.%20Paulo%20Moriyama%2C%20139%20-%20Vila%20Figueira%2C%20Suzano%20-%20SP%2C%2008676-080";

  return (
    <Box id="location" sx={{ overflow: "hidden", mt: 8, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
        Nossa Localização
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Slider {...settings}>
            {locationImages.map((src, index) => (
              <Paper key={index} elevation={4}>
                <img
                  src={src}
                  alt={`Localização ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: isMobile ? "50vh" : "75vh",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ height: isMobile ? "50vh" : "75vh" }}>
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LocationSection;
