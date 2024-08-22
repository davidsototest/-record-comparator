import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ComparatorLayout from "../layouts/ComparatorLayout";
import { comparadorData } from "../data/comparadorData";

const ComparatorPage: React.FC = () => {
 

  return (
    <Grid marginTop={20}>
        <ComparatorLayout comparadorData={comparadorData}/> 
    </Grid>
  );
};

export default ComparatorPage;
