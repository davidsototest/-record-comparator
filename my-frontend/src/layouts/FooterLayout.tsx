import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import TextCommon from "../components/titles/TextCommon";

interface Props {
  // Define props here
}

const FooterLayout: React.FC<Props> = (Props) => {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center" height="100%">
      <Grid>
        <TextCommon
          text={"© 2024 Comparador. Todos los derechos reservados."}
        />
      </Grid>
    </Grid>
  );
};

export default FooterLayout;
