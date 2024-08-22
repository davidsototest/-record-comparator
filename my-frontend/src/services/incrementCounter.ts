import axios from "axios";

const API_URL = process.env.REACT_APP_LOCAL_URL;

export const incrementCounter = async (): Promise<void> => {
  try {
    await axios.post(`${API_URL}/incrementCounter/documents`);
  } catch (error) {
    console.error("Error occurred while submitting form:", error);
    throw error;
  }
};

export const incrementLikes = async (): Promise<void> => {
  try {
    await axios.post(`${API_URL}/incrementCounter/likes`);
  } catch (error) {
    console.error("Error occurred while submitting form:", error);
    throw error;
  }
};
