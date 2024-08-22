export interface Faqs {
  titlePrimary: string;
  data: FaqsTwo[];
}

interface FaqsTwo {
  title: string;
  text: string;
}

export const faqsData: Faqs = {
  titlePrimary: "¿Preguntas Frecuentes?",
  data: [
    {
      title: "¿Qué es esta herramienta?",
      text: "Esta herramienta es una aplicación web que permite comparar los registros de dos archivos, ya sea en formato CSV o TXT. Su principal función es facilitar la identificación de diferencias o similitudes entre los datos de ambos archivos, haciéndolo de manera rápida y eficiente.",
    },
    {
      title: "¿Cómo funciona la comparación?",
      text: "La comparación se realiza de forma completamente local, utilizando el rendimiento de tu computador y el navegador web. Esto significa que los archivos que comparas no se envían a ningún servidor externo, lo que garantiza la seguridad y privacidad de tus datos.",
    },
    {
      title: "¿Es fácil de usar?",
      text: "Sí, la herramienta está diseñada para ser muy fácil de usar. Solo necesitas cargar los dos archivos que deseas comparar y la aplicación se encargará del resto. La interfaz es intuitiva y no requiere conocimientos técnicos avanzados, lo que la hace accesible para cualquier usuario.",
    },
    {
      title: "¿Qué formatos soporta?",
      text: "La aplicación soporta archivos en formato CSV y TXT, que son los formatos más comunes para almacenar y compartir datos estructurados. Esto te permite trabajar con una amplia variedad de archivos y utilizar la herramienta en múltiples escenarios.",
    },
    {
      title: "¿Es gratis?",
      text: "Sí, esta herramienta es completamente gratuita. No tienes que pagar nada para utilizarla, lo que la convierte en una solución accesible para cualquier persona que necesite comparar archivos.",
    },
    {
      title: "¿Es seguro?",
      text: "Sí, es completamente segura. Los archivos que comparas nunca se envían a ningún servidor externo, y no guardamos ningún registro de quién utiliza la aplicación ni de las comparaciones realizadas. Todo el proceso se realiza en tu propio navegador, garantizando la privacidad total de tus datos.",
    },
    {
      title: "¿Cómo está construida?",
      text: "La aplicación está construida con tecnologías modernas como React, TypeScript, y Material-UI para ofrecer una interfaz dinámica y profesional. Usa React Hook Form para la gestión de formularios y React Router DOM para la navegación, mientras que Axios maneja las peticiones HTTP. En el backend, se utiliza Node.js con Express y TypeScript, y se interactúa con una base de datos NoSQL en Firestore. La aplicación está alojada en Firebase, lo que garantiza un hosting fiable y escalable, y se integra con herramientas como Slick Carousel y reCAPTCHA para mejorar la experiencia del usuario."
    }    
  ],
};
