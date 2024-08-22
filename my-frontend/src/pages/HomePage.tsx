import { Box, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import { MarginTop, MaxWidth } from "./measures";
import CardTreeSmall from "../layouts/CardTreeSmallLayout";
import { cardTreeSmallData } from "../data/CardTreeSmall";
import CardTreeSmallLayout from "../layouts/CardTreeSmallLayout";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FaqsLayout from "../layouts/FaqsLayout";
import Accordion from "../components/faqs/Accordion";
import { faqsData } from "../data/Faqs";
import IndicesLayout from "../layouts/IndicesLayout";
import { indicesData } from "../data/Indices";
import AuthotLayout from "../layouts/AuthorLayout";
import TestimonialsLayout from "../layouts/TestimonialsLayout";
import { testimonialsData } from '../data/testimonialsData';
import FooterLayout from "../layouts/FooterLayout";
import FormLayout from "../layouts/FormLayout";
import { useComparator } from "../context/ComparatorContext";
import { authorData } from "../data/authorData";

interface Props {
  // Define props here
}

const HomePage: React.FC<Props> = (Props) => {

  const {processedDocuments, likesObtainedCound} = useComparator();

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <HeaderLayout />
      <Grid sx={{ 
        maxWidth: MaxWidth, 
        marginTop: {
          xs: 0,
          sm: 0,
          md: 0,
          lg: MarginTop,
        } 
      }}>
        <CardTreeSmallLayout
          titlePrimary={cardTreeSmallData.titlePrimary}
          data={cardTreeSmallData.data}
        />
      </Grid>
      
      <Grid sx={{ marginTop: MarginTop, maxWidth: MaxWidth, width: "100%" }}>
        <IndicesLayout indicesData={indicesData} processedDocuments={processedDocuments} likesObtained={likesObtainedCound}/>
      </Grid>

      <Grid sx={{ marginTop: MarginTop }}>
        <FaqsLayout titlePrimary={faqsData.titlePrimary} data={faqsData.data} />
      </Grid>

      <Grid sx={{ marginTop: MarginTop, width: "100%" }}>
        <AuthotLayout authorData={authorData}/>
      </Grid>

      <Grid sx={{ marginTop: {xs: 0, sm: 0, md: MarginTop}, width: "100%", background: theme.palette.background.paper }}>
        <TestimonialsLayout testimonials={testimonialsData}/>
      </Grid>
      
      <Grid sx={{ marginTop: MarginTop, width: "100%" }}>
        <FormLayout />
      </Grid>

      <Grid sx={{ width: "100%", background: "#010101", height: "80px" }}>
        <FooterLayout />
      </Grid>
    </Box>
  );
};

export default HomePage;
