import { Box, useTheme } from "@mui/material";
import React from "react";
import TitlePrimary from "../components/titles/TitlePrimary";
import TextCommon from "../components/titles/TextCommon";
import CardVideo from "../components/cards/CardVideo";

interface Props {
  // Define props here
}

const HeaderLayout: React.FC<Props> = (Props) => {
  const theme = useTheme();
  const videoFile =
    "https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/videoHeader%2Fheader-video2.mp4?alt=media&token=1234f292-849e-4424-9d4f-72041fda9d75";

  const textHeader =
    "Esta aplicación te permite comparar documentos de registros, mostrando de manera clara cuáles registros están en el documento 1 pero no en el documento 2, y viceversa.";

  return (
    <Box
      sx={{
        width: "100%",
        height: 650,
        overflow: "hidden",
        position: "relative",
        display: "flex",
      }}
    >
      <CardVideo videoFile={videoFile} />

      <Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: 0,
            width: {
              xs: "80%",
              md: "50%",
            },
            height: "auto",
            backgroundColor: theme.palette.secondary.dark,
            padding: 2,
            paddingLeft: {
              xs: 5,
              md: 15,
            },
          }}
        >
          <Box sx={{ paddingBottom: 3 }}>
            <TitlePrimary title="Comparador de registro" color={false} />
          </Box>
          <Box>
            <TextCommon text={textHeader} color={false} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderLayout;
