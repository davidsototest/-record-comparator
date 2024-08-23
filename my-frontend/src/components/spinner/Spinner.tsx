import { Box, LinearProgress, useTheme } from "@mui/material";
import React from "react";
import SubTitlePrimary from "../titles/SubTitlePrimary";
import { Fade } from "react-awesome-reveal";

interface Props {
  label: string;
  buffer: number;
  progress: number;
}

const Spinner: React.FC<Props> = ({ label, buffer, progress }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed", // Posiciona el spinner en relación con la pantalla
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Fade triggerOnce={true}>
        <Box
          sx={{
            background: theme.palette.background.default,
            height: 250,
            paddingTop: 10,
            width: 280,
            paddingRight: 4,
            borderRadius: "30% 70% 59% 41% / 30% 38% 62% 70%",
          }}
        >
          <div className="cargando">
            <div
              className="pelotas"
              style={{ background: theme.palette.primary.main }}
            ></div>
            <div
              className="pelotas"
              style={{ background: theme.palette.primary.main }}
            ></div>
            <div
              className="pelotas"
              style={{ background: theme.palette.primary.main }}
            ></div>
            <Box sx={{ marginTop: 3 }}>
              <SubTitlePrimary
                title={label}
                color={theme.palette.primary.main}
              />
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={buffer}
                color="primary"
              />
            </Box>
          </div>
        </Box>
      </Fade>
    </Box>
  );
};

export default Spinner;
