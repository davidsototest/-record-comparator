import React, { createContext, useContext, ReactNode, useState } from "react";
import { postFormContact } from "../services/postFormContact";
import { ToastiError } from "../components/toasti/ToastiError";
import { ToastiSuccess } from "../components/toasti/ToastiSuccess";

//interfaz formulario
export interface FormData {
  name: string;
  phone: string;
  email: string;
  recaptcha: string;
  message: string;
}

interface ServideContextType {
  sendFormContact: (formData: FormData) => Promise<boolean>;
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
  const sendFormContact = async (formData: FormData): Promise<boolean> => {
    setIsLoading(true);
    
    if (!formData.recaptcha) {
      setIsLoading(false);
      ToastiError("🔴 Por favor completa el reCAPTCHA");
      return false;
    }
  
    try {
      await postFormContact(formData);
      ToastiSuccess("¡Formulario enviado con éxito! ✅");
      return true;
    } catch (error) {
      ToastiError("🔴 Hubo un error al enviar formulario.");
      console.error("🔴 Error al añadir publicación:", error);
      return false;
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
