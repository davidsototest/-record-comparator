import { Card, CardMedia } from "@mui/material";
import React, { useEffect } from "react";
import { useScrollRevealHeadline } from "../../theme/scrollRevealConfig";

interface Props {
    imgAutho: string;
}

const CardImg: React.FC<Props> = ({imgAutho}) => {

   //efectos de scrollReveal
   useScrollRevealHeadline();

  return (
    <Card>
      <CardMedia
        sx={{ height: 350 }}
        image={imgAutho}
        title="Photo author"
        className="reveal"
      />
    </Card>
  );
};

export default CardImg;
