import { Card, CardContent } from "@mui/material";
import React from "react";
import SubTitleSecondary from "../titles/SubTitleSecondary";
import TitlePrimary from "../titles/TitlePrimary";
import { Indices } from "../../data/Indices";

const CardIndice: React.FC<Indices> = ({indice, title}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
    >
      <CardContent 
        sx={{
            textAlign: "center"
        }}
      >
        <TitlePrimary title={indice} />
        <SubTitleSecondary title={title} />
      </CardContent>
    </Card>
  );
};

export default CardIndice;
