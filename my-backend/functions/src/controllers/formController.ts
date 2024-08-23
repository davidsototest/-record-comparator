import { Response, Request } from "express";
import { postForm } from "../services/formService";
import { IForm } from "../model/form";
import { sendContactEmail } from "./emailController";
import { validateReCAPCHA } from "../utils/validateReCAPCHA";

export const postFormController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, phone, message, recaptcha } = req.body;

  if (!name || !email || !phone || !message || !recaptcha) {
    res.status(400).json({ error: "Hay datos faltantes" });
  }

  try {
    const validateReCAPCHAService = await validateReCAPCHA(recaptcha);

    if (!validateReCAPCHAService) {
      res.status(400).json({ error: "El reCAPTCHA de google no paso!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error interno del servidor, validador de token google!",
      });
  }

  const formData: IForm = {
    name,
    email,
    phone,
    message,
    recaptcha,
    status: false,
  };

  try {
    const resultDB = await postForm(formData); 
    const resultSend = await sendContactEmail({
      name,
      email,
      phone,
      message,
      recaptcha,
      status: false,
    });

    if (resultDB && resultSend) {
      res
        .status(201)
        .json({ message: "Formulario guardado y enviado exitosamente" });
    } else {
      res
        .status(500)
        .json({ message: "Error al guardar o enviar el formulario", resultDB: resultDB, resultSend: resultSend  });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
