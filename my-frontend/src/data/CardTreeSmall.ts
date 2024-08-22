export interface CardTree {
  titlePrimary: string;
  data: CardTreeData[];
}

interface CardTreeData {
  title: string;
  text: string;
  img: string;
}

export const cardTreeSmallData: CardTree = {
  titlePrimary: "Proceso de Comparación de Archivos",
  data: [
    {
      title: "Carga de Archivos",
      text: "Los usuarios cargan los archivos directamente desde su computadora a la aplicación. Esto se hace de forma local, sin enviar los archivos a ningún servidor, asegurando así la privacidad y seguridad de la información. La aplicación soporta archivos en formato CSV y TXT.",
      img: "https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/cardTreeRobot%2Frobot1%20(2).webp?alt=media&token=96475931-2b46-4e4f-8a49-0c3dd4d6243f",
    },
    {
      title: "Inicio de la Comparación",
      text: "La aplicación comienza a comparar los archivos registro por registro. Se revisa cada línea del primer archivo para identificar si existe un registro equivalente en el segundo archivo. Este proceso es rápido y eficiente, aprovechando el rendimiento de tu navegador y equipo.",
      img: "https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/cardTreeRobot%2Frobot1%20(3).webp?alt=media&token=82f9f73c-8565-402c-8713-de6c303d3308",
    },
    {
      title: "Resultados...",
      text: "Finalmente, la aplicación muestra los registros que no existen en el otro archivo, permitiéndote identificar diferencias de manera clara y precisa. Es una herramienta sencilla pero poderosa para garantizar que no se pierda ninguna información importante. ¡No olvides dejar tu LIKE!",
      img: "https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/cardTreeRobot%2Frobot1%20(1).webp?alt=media&token=0c4281ac-3ebb-40e1-8041-05e85b6810a1",
    },
  ],
};

