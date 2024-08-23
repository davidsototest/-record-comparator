import { Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  color?: string; 
}

const SubTitlePrimary: React.FC<Props> = ({ title, color }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      color={color ? color : theme.palette.primary.main}
      sx={{ 
        fontWeight: 600,
        fontSize: {
          xs: "1.5rem",
          sm: "1.8rem",
          md: "2.5rem",
        },
       }}
    >
      {title}
    </Typography>
  );
};

export default SubTitlePrimary;
