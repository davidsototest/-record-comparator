import { Card, CardMedia, CardContent, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import SubTitleSecondary from "../titles/SubTitleSecondary";
import TextCommon from "../titles/TextCommon";
import {
  initScrollRevealWidget,
} from "../../theme/scrollRevealConfig";

interface Props {
  title: string;
  text: string;
  img: string;
}

const CardSmall: React.FC<Props> = ({ title, text, img }) => {
  const theme = useTheme();

  //efectos de scrollReveal
  useEffect(() => {
    initScrollRevealWidget();
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        image={img}
        alt={img}
        className="widget"
        sx={{
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
      <CardContent>
        <SubTitleSecondary title={title} />
        <TextCommon text={text} />
      </CardContent>
    </Card>
  );
};

export default CardSmall;
