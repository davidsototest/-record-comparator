import nodemailer, { Transporter } from "nodemailer";
import * as functions from 'firebase-functions';

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
  tls: {
    rejectUnauthorized: false, // Esto deshabilita la verificación del certificado y llega al spam
  },
});

export default transporter;
