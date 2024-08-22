import { Avatar, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SubTitleSecondary from "./titles/SubTitleSecondary";
import TextCommon from "./titles/TextCommon";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface Props {
  name: string;
  img: string;
  city: string;
}

const UserTestimonials: React.FC<Props> = ({name, img, city}) => {
  const theme = useTheme();

  return (
    <Grid container height={70} marginTop={2}>
      <Grid xs={3} display="flex" justifyContent="center" alignItems="center">
        <Avatar
          alt="avatar "
          src={img}
          sx={{ width: 55, height: 55 }}
        />
      </Grid>
      <Grid xs={7} display="flex" justifyContent="start" alignItems="center">
        <Grid container>
          <Grid xs={12} width={"100%"}>
            <SubTitleSecondary title={name} styleScrollReveal={false}/>
          </Grid>
          <Grid xs={12} width={"100%"}>
            <TextCommon text={city} styleScrollReveal={false}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
        <FormatQuoteIcon
          sx={{ fontSize: 75, color: theme.palette.primary.main }}
        />
      </Grid>
    </Grid>
  );
};

export default UserTestimonials;
