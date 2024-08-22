import { Box, Button, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import SubTitlePrimary from "./titles/SubTitlePrimary";
import { ReactComponent as LogoGato } from "../assets/cat-svgrepo-com.svg";
import { useThemeContext } from "../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { initScrollRevealHeadline } from "../theme/scrollRevealConfig";

interface Props {
  // Define props here
}

const Navbar: React.FC<Props> = (Props) => {
  const [buttonText, setButtonText] = useState<string>("Probar Comparador");
  const theme = useTheme();
  const { toggleTheme, iconMode: IconModeComponent } = useThemeContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname === "/comparator") {
      navigate("/");
    } else {
      navigate("/comparator");
    }
  };

  // validar el dispositivo
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      if (isXs || isSm) {
        setButtonText("Probar");
      } else {
        setButtonText("Probar Comparador");
      }
    } else {
      if (isXs || isSm) {
        setButtonText("Home");
      } else {
        setButtonText("Ir al Home");
      }
    }
  }, [location.pathname, isXs, isSm]);

  useEffect(() => {
    if (isXs || isSm) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isXs, isSm]);

   //efectos de scrollReveal
   useEffect(() => {
    initScrollRevealHeadline();
  }, []);

  return (
    <Box
      className="header-one reveal"
      // className="reveal"
      sx={{
        background: theme.palette.secondary.dark,
        width: { xs: "95%", sm: "90%", md: "80%" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          marginLeft: {
            xs: "10px",
            sm: "35px",
          },
          marginRight: {
            xs: "10px",
            sm: "35px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <LogoGato
              style={{
                width: 55,
                height: 50,
                marginRight: 15,
                fill: theme.palette.primary.main,
              }}
            />
            {!isMobile ? (
              <Box sx={{ marginTop: 0.5 }}>
                <SubTitlePrimary title={"Comparador"} />
              </Box>
            ) : (
              <></>
            )}
          </div>
          <Box justifyContent="end" sx={{ display: { md: "flex" } }}>
            <ButtonPrimary label={buttonText} clic={handleNavigation} limitWidth={false}/>
            <Button
              variant="text"
              onClick={toggleTheme}
              sx={{ marginLeft: { xs: "5px", md: "35px" } }}
            >
              <IconModeComponent style={{ fontSize: 40 }} />
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
