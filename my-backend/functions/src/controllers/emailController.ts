import { IForm } from "../model/form";
import transporter from "../services/emailServices";

export const sendContactEmail = async ({
  name,
  email,
  phone,
  message,
}: IForm): Promise<boolean> => {
  try {
    const info = await transporter.sendMail({
      from: 'multiplicadavid@outlook.com', // quien envia
      to: "multiplicadavid@outlook.com, psoto123@gmail.com, david.soto.test@gmail.com", // correos destino
      subject: "📌📌📌 INTENTAN COMUNICARSE CONTIGO 📌📌📌",
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nComentario: ${message}`,
      html: `
              <h1>Nuevo Mensaje de Contacto</h1>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>Comentario:</strong> ${message}</p>
            `,
    });

    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error enviando el email:", error);
    return false;
  }
};
