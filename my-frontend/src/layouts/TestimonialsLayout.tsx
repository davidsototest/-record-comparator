import React, { useEffect } from "react";
import { Testimonials } from "../data/testimonialsData";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SubTitlePrimary from "../components/titles/SubTitlePrimary";
import TextCommon from "../components/titles/TextCommon";
import { MaxWidth, TitlePadding } from "../pages/measures";
import SliderSmall from "../components/slider/SliderSmall";
import { initScrollRevealHeadline } from "../theme/scrollRevealConfig";

interface PropsTestimoniasl {
  testimonials: Testimonials[];
}

const TestimonialsLayout: React.FC<PropsTestimoniasl> = ({ testimonials }) => {

  const testimonio = "Estos son los testimonios de usuarios que han experimentado de primera mano la efectividad de nuestra aplicación. Aunque algunos usuarios han optado por no compartir su experiencia públicamente, los comentarios que hemos recibido reflejan la utilidad y el impacto positivo que la herramienta ha tenido en su trabajo diario. La aplicación ha facilitado la comparación precisa y rápida de registros entre archivos CSV y TXT, simplificando tareas que antes requerían mucho tiempo y esfuerzo. Estos testimonios son un reflejo del valor que aporta nuestra herramienta en la gestión y análisis de datos.";

   //efectos de scrollReveal
   useEffect(() => {
    initScrollRevealHeadline();
  }, []);
  
  return (
    <Grid container justifyContent="center">
      <Grid xs={12} display="flex" textAlign="center" justifyContent="center" paddingTop={TitlePadding}>
        <SubTitlePrimary title={'Testimonios'}/>
      </Grid>
      <Grid xs={11} md={6} display="flex" textAlign="center" justifyContent="center" paddingBottom={TitlePadding} marginTop={2}>
        <TextCommon text={testimonio}/>
      </Grid>
      <Grid sx={{maxWidth: MaxWidth}} margin="auto" paddingBottom={8} className="reveal">
        <SliderSmall testimonials={testimonials} />
      </Grid>
    </Grid>
  );
};

export default TestimonialsLayout;
