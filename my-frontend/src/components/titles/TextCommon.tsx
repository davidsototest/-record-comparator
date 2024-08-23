import { Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  color?: boolean;
  styleScrollReveal?: boolean;
}

const TextCommon: React.FC<Props> = ({ text, color, styleScrollReveal = true }) => {
  const theme = useTheme();

  return (
    <Typography
      color={color ? theme.palette.secondary.main : theme.palette.primary.main}
      style={{ fontWeight: 100 }}
    >
      {text}
    </Typography>
  );
};

export default TextCommon;
