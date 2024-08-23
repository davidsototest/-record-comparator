import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const scrollRevealConfigHeadline = {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false, // Esto asegura que no se vuelva a ejecutar al hacer scroll
  easing: 'ease-in-out',
};

export const useScrollRevealHeadline = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isRevealed) {
      ScrollReveal().reveal('.reveal', scrollRevealConfigHeadline);
      setIsRevealed(true); // Marcar que ya se aplicó el efecto
    }
  }, [isRevealed]);
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

export const useScrollRevealWidget = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isRevealed) {
      ScrollReveal().reveal('.widget', scrollRevealConfigWidget);
      setIsRevealed(true); // Marcar que ya se aplicó el efecto
    }
  }, [isRevealed]);
};
