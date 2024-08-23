import { Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useScrollRevealHeadline } from "../../theme/scrollRevealConfig";

interface Props {
  title: string;
  color?: boolean;
  styleScrollReveal?: boolean;
}

const SubTitleSecondary: React.FC<Props> = ({ title, color, styleScrollReveal = true }) => {
  const theme = useTheme();

   //efectos de scrollReveal
   useScrollRevealHeadline();

  return (
    <Typography
      variant="h6"
      color={color ? theme.palette.secondary.main : theme.palette.primary.main}
      className={styleScrollReveal ? "reveal" : "none"}
      sx={{
        fontWeight: 400,
        fontSize: {
          xs: 20,
          md: 25,
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default SubTitleSecondary;
