import axios from 'axios';
import * as functions from 'firebase-functions';

export const validateReCAPCHA = async (recaptcha: string): Promise<boolean> => {
  const secretKey = functions.config().recaptcha.secretkey;

  try {
    // Verifica el token de reCAPTCHA con la API de Google
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`
    );

    if (response.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al consultar reCAPTCHA con Google:', error);
    return false;
  }
};
