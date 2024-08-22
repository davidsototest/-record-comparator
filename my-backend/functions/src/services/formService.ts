import { db } from "../config/config";
import { IForm } from "../model/form";

export const postForm = async (formData: IForm): Promise<boolean> => {
    try {
      const formCollection = db.collection("form");
      await formCollection.add(formData);
      return true;
    } catch (error) {
      console.error("Error al guardar el documento", error);
      return false;
    }
  };
