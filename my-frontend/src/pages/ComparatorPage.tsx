import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ComparatorLayout from "../layouts/ComparatorLayout";
import { comparadorData } from "../data/comparadorData";
import FooterLayout from "../layouts/FooterLayout";

const ComparatorPage: React.FC = () => {
  return (
    <>
      <Grid marginTop={20} marginBottom={10}>
        <ComparatorLayout comparadorData={comparadorData} />
      </Grid>
      <Grid sx={{ width: "100%", background: "#010101", height: "80px" }}>
        <FooterLayout />
      </Grid>
    </>
  );
};

export default ComparatorPage;
