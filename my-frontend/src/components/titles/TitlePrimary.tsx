import { Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useScrollRevealHeadline } from "../../theme/scrollRevealConfig";

interface Props {
  title: string;
  color?: boolean;
}

const TitlePrimary: React.FC<Props> = ({ title, color }) => {
  const theme = useTheme();

   //efectos de scrollReveal
   useScrollRevealHeadline();

  return (
    <Typography
      variant= "h2"
      color={color ? theme.palette.secondary.main : theme.palette.primary.main}
      className="reveal"
      sx={{
        fontSize: {
          xs: "1.8rem",
          sm: "2rem",
          md: "3rem",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default TitlePrimary;
