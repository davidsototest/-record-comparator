import React from "react";
import CardAuthor from "../components/cards/CardAuthor";
import { Box, useTheme } from "@mui/material";
import CardVideo from "../components/cards/CardVideo";
import CardImg from "../components/cards/CardImg";
import { MaxWidth } from "../pages/measures";
import { AuthorData } from "../data/authorData";

interface AuthorDataLoyout {
  authorData: AuthorData;
}

const AuthotLayout: React.FC<AuthorDataLoyout> = ({ authorData }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: 1100,
          sm: 680,
          md: 480,
        },
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <CardVideo videoFile={authorData.videoFile} />

      <Box sx={{ maxWidth: MaxWidth, position: "absolute" }}>
        <Box
          sx={{
            bottom: "0%",
            // top: "50%",
            left: 0,
            width: {
              xs: "100%",
              sm: "60%",
            },
            // height: "50%",
            backgroundColor: theme.palette.background.paper,
            padding: 2,
            paddingLeft: {
              xs: 1,
              sm: 5,
              md: 10,
            },
          }}
        >
          <CardAuthor
            title={authorData.title}
            text={authorData.text}
            text2={authorData.text2}
            urlLinkedin={authorData.urlLinkedin}
            buttonName={authorData.buttonName}
          />
        </Box>
        <Box
          sx={{
            position: {
              xs: "flex",
              sm: "absolute"
            },
            bottom: {
              xs: "50px",
              sm: "180px",
              md: "60px"
            },
            left: {
              xs: "60%",
              sm: "60%",
              md: "70%"
            },
            width: {
              xs: "100%",
              sm: "40%",
              md: "20%"
            },
            // padding: 2,
            // paddingLeft: 10,
          }}
        >
          <CardImg imgAutho={authorData.imgAuthor} />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthotLayout;
