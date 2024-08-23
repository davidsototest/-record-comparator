import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
interface Props {
  title: string;
  color?: boolean;
}

const TitlePrimary: React.FC<Props> = ({ title, color }) => {
  const theme = useTheme();

  return (
    <Fade triggerOnce={true}>
      <Typography
        variant="h2"
        color={
          color ? theme.palette.secondary.main : theme.palette.primary.main
        }
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
    </Fade>
  );
};

export default TitlePrimary;
