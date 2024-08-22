import ScrollReveal from 'scrollreveal';

const scrollRevealConfigHeadline = {
  origin: 'bottom',
  distance: '50px',
  duration: 1000, 
  delay: 200,
  reset: false,
  easing: 'ease-in-out',
};

export const initScrollRevealHeadline = () => {
  ScrollReveal().reveal('.reveal', scrollRevealConfigHeadline);
};

const scrollRevealConfigWidget = {
    origin: 'left',
    distance: '20px',
    duration: 1000, 
    delay: 200,
    reset: false,
    easing: 'ease-in-out',
    interval: 200,
  };
  
  export const initScrollRevealWidget = () => {
    ScrollReveal().reveal('.widget', scrollRevealConfigWidget);
  };
