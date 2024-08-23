import { Card, CardMedia } from "@mui/material";
import React from "react";


interface Props {
    imgAutho: string;
}

const CardImg: React.FC<Props> = ({imgAutho}) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 350 }}
        image={imgAutho}
        title="Photo author"
      />
    </Card>
  );
};

export default CardImg;
