import { Card, CardMedia } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface Props {
  imgAutho: string;
}

const CardImg: React.FC<Props> = ({ imgAutho }) => {
  return (
    <Card>
      <Fade triggerOnce={true}>
        <CardMedia sx={{ height: 350 }} image={imgAutho} title="Photo author" />
      </Fade>
    </Card>
  );
};

export default CardImg;
