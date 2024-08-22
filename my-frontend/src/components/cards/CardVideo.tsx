
import { Card, CardMedia } from '@mui/material';
import React from 'react';

interface Props {
    videoFile: string
}

const CardVideo: React.FC<Props> = ({videoFile}) => {
    return (
        <Card
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          boxShadow: "none",
          border: "none",
        }}
      >
        <CardMedia
          component="video"
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Card>
    );
};

export default CardVideo;