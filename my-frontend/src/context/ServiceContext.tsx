import React, { createContext, useContext, ReactNode, useState } from "react";
import { postFormContact } from "../services/postFormContact";

//interfaz formulario
export interface FormData {
  name: string;
  phone: string;
  email: string;
  recaptcha: string;
  message: string;
}

interface ServideContextType {
  sendFormContact: (formData: FormData) => void;
  isLoading: boolean;
}

const ServicesContext = createContext<ServideContextType | undefined>(
  undefined
);

export const ServicesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [isLoading, setIsLoading] = useState(false);
    
  //Enviar formulario de contacto
  const sendFormContact = async (formData: FormData) => {
    setIsLoading(true);
    try {
      await postFormContact(formData);
    //   ToastiSuccess("¡Publicación añadida con éxito! ✅");
    } catch (error) {
    //   ToastiError("Hubo un error al añadir la publicación. 😬");
      console.error("Error al añadir publicación:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        sendFormContact,
        isLoading,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServideContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error(
      "usePublications must be used within a PublicationsProvider"
    );
  }
  return context;
};
