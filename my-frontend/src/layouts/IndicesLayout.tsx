import React from "react";
import CardIndice from "../components/cards/CardIndice";
import { Indices } from "../data/Indices";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface IndicesLayoutProps {
    indicesData: Indices[];
    processedDocuments: number;
    likesObtained: number;
  }

const IndicesLayout: React.FC<IndicesLayoutProps> = ({indicesData, processedDocuments, likesObtained}) => {

  return (
    <Grid container >
        <Grid
          xs={12}
          sm={4}
          md={4}
          paddingBottom={2}
          display="flex"
          justifyContent="center"
        >
          <CardIndice indice={indicesData[0].indice} title={indicesData[0].title} />
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={4}
          paddingBottom={2}
          display="flex"
          justifyContent="center"
        >
          <CardIndice indice={processedDocuments.toString()} title={indicesData[1].title} />
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={4}
          paddingBottom={2}
          display="flex"
          justifyContent="center"
        >
          <CardIndice indice={likesObtained.toString()} title={indicesData[2].title} />
        </Grid>
    </Grid>
  );
};

export default IndicesLayout;
