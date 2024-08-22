import axios from "axios";

const API_URL = process.env.REACT_APP_LOCAL_URL;

export const processedDocuemnt = async (): Promise<number> => {
  try {
    const response = await axios.get(`${API_URL}/indicators/processed`);
    return response.data.count;
    
  } catch (error) {
    console.error("Error occurred while submitting form:", error);
    throw error;
  }
};

export const likesObtained = async (): Promise<number> => {
  try {
    const response = await axios.get(`${API_URL}/indicators/likes`);
    return response.data.count;
    
  } catch (error) {
    console.error("Error occurred while submitting form:", error);
    throw error;
  }
};
