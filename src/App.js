import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Header from "./components/Header";
import FullScreenVideo from "./components/FullScreenVideo";
import Services from "./components/Services";
import InstagramFeed from "./components/InstagramFeed";
import SocialMediaCards from "./components/SocialMediaCards";
import Footer from "./components/Footer";
import ScheduleEvaluation from "./components/ScheduleEvaluation";
import LocationSection from "./components/LocationSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <FullScreenVideo />
      <Services />
      {/* <InstagramFeed /> */}
      <ScheduleEvaluation />
      <SocialMediaCards />
      <LocationSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
