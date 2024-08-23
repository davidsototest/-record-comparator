import { Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  color?: boolean;
  styleScrollReveal?: boolean;
}

const SubTitleSecondary: React.FC<Props> = ({ title, color, styleScrollReveal = true }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      color={color ? theme.palette.secondary.main : theme.palette.primary.main}
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
