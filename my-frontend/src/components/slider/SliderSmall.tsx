import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Testimonials } from "../../data/testimonialsData";
import CardTestimonials from "../cards/CardTestimonials";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface PropsSlider {
  testimonials: Testimonials[];
}

const SliderSmall: React.FC<PropsSlider> = ({ testimonials }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    if (isXs) {
      setSlidesToShow(1);
      setShowArrows(false);
    } else if (isSm) {
      setSlidesToShow(2);
      setShowArrows(false);
    } else if (isMd) {
      setSlidesToShow(3);
      setShowArrows(true);
    }
  }, [isXs, isSm, isMd]);

  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Hace que el carrusel sea infinito
    speed: 2500, // Velocidad de transición
    slidesToShow: slidesToShow, // Número de slides visibles al mismo tiempo
    slidesToScroll: 1, // Número de slides que se desplazan con cada clic
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 3000, // Velocidad de la reproducción automática (en milisegundos)
    arrows: showArrows, // Muestra u oculta los botones de transición
  };

  return (
    <Box sx={{ paddingBottom: 3 }}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index}>
            <CardTestimonials
              name={testimonial.name}
              text={testimonial.text}
              img={testimonial.img}
              city={testimonial.city}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderSmall;
