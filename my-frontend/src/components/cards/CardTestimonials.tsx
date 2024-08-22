import { Card, CardContent, useTheme } from "@mui/material";
import React from "react";
import TextCommon from "../titles/TextCommon";
import UserTestimonials from "../UserTestimonials"; 
import { Testimonials } from "../../data/testimonialsData";

interface Props {
  // Define props here
}

const CardTestimonials: React.FC<Testimonials> = ({text, name, img, city}) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        maxWidth: 450,
        minWidth: 350,
        background: theme.palette.background.default,
        padding: "5px",
        // boxShadow: "none",
        // border: "none"
      }}
    >
      <CardContent>
        <TextCommon text={text} styleScrollReveal={false}/>
        <UserTestimonials name={name} img={img} city={city}/>
      </CardContent>
    </Card>
  );
};

export default CardTestimonials;
