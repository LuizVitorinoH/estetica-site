import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "rgba(27, 26, 26, 0.7)" : "transparent",
      transition: "0.3s",
    },
  });
}

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    handleClose();
  };

  const menuOptions = [
    { name: "Nossos Serviços", sectionId: "services" },
    { name: "Últimas Postagens", sectionId: "instagram" },
    { name: "Agende sua Avaliação", sectionId: "evaluation" },
    { name: "Nossa Localização", sectionId: "location" },
  ];

  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            {/* Logo pode ser um componente separado ou simplesmente uma imagem como abaixo */}
            <img
              src="/logo-estetica.png"
              alt="Logotipo"
              style={{ height: "50px", marginRight: "20px" }}
            />
            {!isMobile && (
              // Links do desktop
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                {menuOptions.map((option) => (
                  <Button
                    key={option.name}
                    sx={{ color: "white", display: "block" }}
                    onClick={() => handleMenuItemClick(option.sectionId)}
                  >
                    {option.name}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
          {isMobile && (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                sx={{ ml: "auto" }} // Empurra o ícone para a direita
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {menuOptions.map((option) => (
                  <MenuItem
                    key={option.name}
                    onClick={() => handleMenuItemClick(option.sectionId)}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
