import { Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { initScrollRevealHeadline } from "../../theme/scrollRevealConfig";

interface Props {
  text: string;
  color?: boolean;
  styleScrollReveal?: boolean;
}

const TextCommon: React.FC<Props> = ({ text, color, styleScrollReveal = true }) => {
  const theme = useTheme();

   //efectos de scrollReveal
   useEffect(() => {
    // initScrollRevealWidget();
    initScrollRevealHeadline();
  }, []);

  return (
    <Typography
      color={color ? theme.palette.secondary.main : theme.palette.primary.main}
      style={{ fontWeight: 100 }}
      className={styleScrollReveal ? "reveal" : "none"}
    >
      {text}
    </Typography>
  );
};

export default TextCommon;
