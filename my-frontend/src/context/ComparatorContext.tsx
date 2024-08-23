import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { comparator } from "../utils/comparator";
import { validator } from "../utils/validator";
import { incrementCounter, incrementLikes } from "../services/incrementCounter";
import {
  likesObtained,
  processedDocuemnt,
} from "../services/processedDocument";
import { ToastiSuccess } from "../components/toasti/ToastiSuccess";
import { ToastiError } from "../components/toasti/ToastiError";

//interfaz formulario
export interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ComparatorContextType {
  isLoading: boolean;
  setDataArchivo1: (lines: string[]) => void;
  setDataArchivo2: (lines: string[]) => void;
  validatorFile: (file: File, archivo: number) => void;
  dataArchivo1: string[];
  dataArchivo2: string[];
  runComparator: () => void;
  resetStates: () => void;
  activateButtonComparator: boolean;
  activateButtonReset: boolean;
  progress: number;
  buffer: number;
  registerDataArchivo1: string[];
  registerDataArchivo2: string[];
  finishedProcess: boolean;
  getProcessedDocuments: () => void;
  processedDocuments: number;
  postLike: () => void;
  likesObtainedCound: number;
}

const ComparatorContext = createContext<ComparatorContextType | undefined>(
  undefined
);

export const ComparatorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // INDICADORES
  // datos de la cantidad de archivos procesados y likes
  const [processedDocuments, setProcessedDocuments] = useState<number>(() => {
    const storedValue = sessionStorage.getItem("processedDocuments");
    return storedValue ? parseInt(storedValue, 10) || 0 : 0;
  });
  const [likesObtainedCound, setLikesObtainedCound] = useState<number>(() => {
    const storedValueLikes = sessionStorage.getItem("likesObtained");
    return storedValueLikes ? parseInt(storedValueLikes, 10) || 0 : 0;
  });

  //data docs cargados por el user
  const [dataArchivo1, setDataArchivo1] = useState<string[]>([]);
  const [dataArchivo2, setDataArchivo2] = useState<string[]>([]);

  //registros que no estan o no son iguales despues del comparador run
  const [registerDataArchivo1, setRegisterDataArchivo1] = useState<string[]>(
    []
  );
  const [registerDataArchivo2, setRegisterDataArchivo2] = useState<string[]>(
    []
  );

  //estados de avance de la barra de progreso.
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(5);

  // estados de botones de comparar y limpiar
  const [activateButtonComparator, setActivateButtonComparator] =
    useState(false);
  const [activateButtonReset, setActivateButtonReset] = useState(false);

  // spinner
  const [isLoading, setIsLoading] = useState(false);

  // Finalizo el proceso de comparacion?
  const [finishedProcess, setFinishedProcess] = useState(false);

  // ***************** COMPARADOR ************************

  // Validar si es archivo CSV o TXT y procesarlo
  const validatorFile = async (file: File, archivo: number) => {
    try {
      const response = await validator(
        file,
        archivo,
        setDataArchivo1,
        setDataArchivo2,
        setIsLoading
      );
      if (response) {
        ToastiSuccess("✅ Archivo Cargado Exitosamente");
      } else {
        ToastiError("⛔ CSV y TXT son los formatos soportados");
      }
    } catch (error) {
      ToastiError("🔴 Error al intentar cargar el archivo");
    }
  };

  const runComparator = async () => {
    try {
      await comparator(
        dataArchivo1,
        dataArchivo2,
        setRegisterDataArchivo1,
        setRegisterDataArchivo2,
        setProgress,
        setBuffer,
        setIsLoading,
        setFinishedProcess
      );
      //funcion o servicio para aumenter +1 el contador de cant de archivos procesados
      await incrementCounter();
      await getProcessedDocuments();
      ToastiSuccess("✅ ¡Comparación Finalizada!");
    } catch (error) {
      ToastiError("🔴 Error en la comparación");
    }
  };

  //limpiar los estados con toda la data
  const resetStates = () => {
    setDataArchivo1([]);
    setDataArchivo2([]);
    setRegisterDataArchivo1([]);
    setRegisterDataArchivo2([]);
    setFinishedProcess(false);
    setProgress(0);
    setBuffer(5);
    setProcessedDocuments(0);
    sessionStorage.removeItem("processedDocuments");
    sessionStorage.removeItem("likesObtained");
    ToastiSuccess("👍 ¡Todo limpio para una nueva comparación!");
  };

  // usuario deja un like
  const postLike = async () => {
    try {
      await incrementLikes();
      ToastiSuccess("Gracias por tu LIKE 👍");
    } catch (error) {
      console.log("Error al dejar like, error: " + error);
      ToastiError("🔴 Error en la entrega del like");
    }
  };

  // ***************** INDICADORES ****************
  const getProcessedDocuments = async () => {
    const count = await processedDocuemnt();
    setProcessedDocuments(count);
    sessionStorage.setItem("processedDocuments", count.toString());
  };

  const getLikesObtained = async () => {
    const likes = await likesObtained();
    setLikesObtainedCound(likes);
    sessionStorage.setItem("likesObtained", likes.toString());
  };

  //  **************** USE EFFECTS ***************
  // activar y desactivar el boton de comparador y el limpiar todo
  useEffect(() => {
    if (dataArchivo1.length > 0 && dataArchivo2.length > 0) {
      setActivateButtonComparator(true);
    } else {
      setActivateButtonComparator(false);
    }

    if (dataArchivo1.length > 0 || dataArchivo2.length > 0) {
      setActivateButtonReset(true);
    } else {
      setActivateButtonReset(false);
    }
  }, [dataArchivo1, dataArchivo2]);

  // actualizar los estados con la data al finalizar el analisis de comparacion
  useEffect(() => {
    if (finishedProcess) {
      if (registerDataArchivo1.length === 0) {
        setDataArchivo1([
          "Todos los registros del archivo 1, coinciden en el archivo 2...",
        ]);
      }
      if (registerDataArchivo2.length === 0) {
        setDataArchivo2([
          "Todos los registros del archivo 2, coinciden en el archivo 1...",
        ]);
      }
    } else {
      setDataArchivo1(registerDataArchivo1);
      setDataArchivo2(registerDataArchivo2);
    }
  }, [registerDataArchivo1, registerDataArchivo2, finishedProcess]);

  // consultar por primera vez la cantidad de archivos procesados y likes
  useEffect(() => {
    if (
      processedDocuments === 0 &&
      !sessionStorage.getItem("processedDocuments")
    ) {
      getProcessedDocuments();
    }
    if (likesObtainedCound === 0 && !sessionStorage.getItem("likesObtained")) {
      getLikesObtained();
    }
  }, [processedDocuments, likesObtainedCound]);

  return (
    <ComparatorContext.Provider
      value={{
        isLoading,
        validatorFile,
        dataArchivo1,
        dataArchivo2,
        setDataArchivo1,
        setDataArchivo2,
        runComparator,
        resetStates,
        activateButtonComparator,
        activateButtonReset,
        progress,
        buffer,
        registerDataArchivo1,
        registerDataArchivo2,
        finishedProcess,
        getProcessedDocuments,
        processedDocuments,
        postLike,
        likesObtainedCound,
      }}
    >
      {children}
    </ComparatorContext.Provider>
  );
};

export const useComparator = (): ComparatorContextType => {
  const context = useContext(ComparatorContext);
  if (!context) {
    throw new Error(
      "usePublications must be used within a PublicationsProvider"
    );
  }
  return context;
};
