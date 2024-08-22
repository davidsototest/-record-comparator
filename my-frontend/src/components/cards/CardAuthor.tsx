import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SubTitlePrimary from "../titles/SubTitlePrimary";
import TextCommon from "../titles/TextCommon";
import ButtonPrimary from "../buttons/ButtonPrimary";

interface Props {
  title: string;
  text: string;
  text2: string;
  buttonName: string;
  urlLinkedin: string;
}

const CardAuthor: React.FC<Props> = ({
  title,
  text,
  text2,
  buttonName,
  urlLinkedin,
}) => {
  const toLinkeding = () => {
    window.open(urlLinkedin, "_blank");
  };

  return (
    <Card
      sx={{
        // maxWidth: 345,
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
    >
      <CardContent>
        <Grid container rowSpacing={3}>
          <Grid xs={12}>
            <SubTitlePrimary title={title} />
          </Grid>
          <Grid xs={12}>
            <TextCommon text={text} />
          </Grid>
          <Grid xs={12}>
            <TextCommon text={text2} />
          </Grid>
          <Grid xs={12}>
            <ButtonPrimary label={buttonName} clic={toLinkeding} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardAuthor;
