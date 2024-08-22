export interface ComparadorData {
    titlePage: string;
    subTitle: string;
    subTitleSecundary: string;
    buttonA: string;
    buttonB: string;
    buttonPrimary: string;
    buttonSecundary: string;
    buttonLike: string;
    placeHolderTextAreaA: string;
    placeHolderTextAreaB: string;
    labelSpinner: string;
  }

  export const comparadorData = {
    titlePage: "Comparador de registros",
    subTitle: "Puedes cargar un archivo CSV o TXT desde tu ordenador",
    subTitleSecundary: "Después de realizar la comparación, te mostraremos un mensaje confirmando si todos los registros coinciden. En caso contrario, te indicaremos cuáles registros no se encuentran en el otro archivo.",
    buttonA: "Cargar Archivo 1",
    buttonB: "Cargar Archivo 2",
    buttonPrimary: "Comparar registros",
    buttonSecundary: "Limpiar todo",
    buttonLike: "Deja tu like",
    placeHolderTextAreaA: "Carga un archivo con registros CSV o TXT (1)",
    placeHolderTextAreaB: "Carga un archivo con registros CSV o TXT (2)",
    labelSpinner: "Analizando",
  };
  