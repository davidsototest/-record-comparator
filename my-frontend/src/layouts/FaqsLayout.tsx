import React, { useEffect, useState } from "react";
import Accordion from "../components/faqs/Accordion";
import { Faqs } from "../data/Faqs";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SubTitlePrimary from "../components/titles/SubTitlePrimary";
import { MarginTop, TitlePadding } from "../pages/measures";
import { useScrollRevealHeadline } from "../theme/scrollRevealConfig";

interface Props {
  // Define props here
}

const FaqsLayout: React.FC<Faqs> = ({ titlePrimary, data }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => {
    setExpanded((prevExpanded) => (prevExpanded === panel ? false : panel));
  };

  //efectos de scrollReveal
  useScrollRevealHeadline();

  return (
    <Grid container justifyContent="center">
      <Grid xs={12} textAlign="center" paddingBottom={TitlePadding}>
        <SubTitlePrimary title={titlePrimary} />
      </Grid>
      {data.map((faq, index) => (
        <Grid
          key={index}
          xs={11}
          md={12}
          paddingBottom={2}
          display="flex"
          justifyContent="center"
          className="reveal"
        >
          <Accordion
            title={faq.title}
            text={faq.text}
            panel={index + 1}
            handleChange={handleChange}
            expanded={expanded}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FaqsLayout;
