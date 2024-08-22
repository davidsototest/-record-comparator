import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SubTitlePrimary from "../components/titles/SubTitlePrimary";
import { CardTree } from "../data/CardTreeSmall";
import CardSmall from "../components/cards/CardSmall";
import { TitlePadding } from "../pages/measures";
import { useTheme } from "@mui/material";

const CardTreeSmallLayout: React.FC<CardTree> = ({ titlePrimary, data }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor={theme.palette.background.paper}
      paddingBottom={TitlePadding}
      justifyContent="center"
      display="flex"
    >
      <Grid
        xs={12}
        textAlign="center"
        paddingTop={TitlePadding}
        paddingBottom={TitlePadding}
      >
        <SubTitlePrimary title={titlePrimary} />
      </Grid>
      <Grid
        container
        width={"100%"}
        spacing={{
          xs: 0,
          sm: 3,
          md: 3,
        }}
      >
        {data.map((card, index) => (
          <Grid
            key={index}
            xs={12}
            sm={4}
            display="flex"
            justifyContent="center"
            sx={{
              marginBottom: {
                xs: 5,
                sm: 0,
                md: 0,
              }
            }}
          >
            <CardSmall title={card.title} text={card.text} img={card.img} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CardTreeSmallLayout;
