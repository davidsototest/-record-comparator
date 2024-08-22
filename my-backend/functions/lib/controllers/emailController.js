"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const emailServices_1 = __importDefault(require("../services/emailServices"));
const sendContactEmail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, phone, message, }) {
    try {
        const info = yield emailServices_1.default.sendMail({
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
    }
    catch (error) {
        console.error("Error enviando el email:", error);
        return false;
    }
});
exports.sendContactEmail = sendContactEmail;
//# sourceMappingURL=emailController.js.map