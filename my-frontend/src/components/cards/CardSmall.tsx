import { Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import SubTitleSecondary from "../titles/SubTitleSecondary";
import TextCommon from "../titles/TextCommon";
import { Fade } from "react-awesome-reveal";

interface Props {
  title: string;
  text: string;
  img: string;
}

const CardSmall: React.FC<Props> = ({ title, text, img }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
    >
      <Fade triggerOnce={true}>
        <CardMedia
          component="img"
          height="250px"
          image={img}
          alt={img}
          sx={{
            borderRadius: "15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Fade>

      <CardContent>
        <SubTitleSecondary title={title} />
        <TextCommon text={text} />
      </CardContent>
    </Card>
  );
};

export default CardSmall;
