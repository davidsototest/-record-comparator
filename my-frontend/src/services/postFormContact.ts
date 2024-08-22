import axios from "axios";
import { FormData } from "../context/ServiceContext";

const API_URL = process.env.REACT_APP_LOCAL_URL;

export const postFormContact = async (formData: FormData): Promise<void> => {
  try {
    await axios.post(`${API_URL}/form`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error occurred while submitting form:", error);
    throw error;
  }
};
