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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFormController = void 0;
const formService_1 = require("../services/formService");
const emailController_1 = require("./emailController");
const validateReCAPCHA_1 = require("../utils/validateReCAPCHA");
const postFormController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, message, recaptcha } = req.body;
    if (!name || !email || !phone || !message || !recaptcha) {
        res.status(400).json({ error: "Hay datos faltantes" });
    }
    try {
        const validateReCAPCHAService = yield (0, validateReCAPCHA_1.validateReCAPCHA)(recaptcha);
        if (!validateReCAPCHAService) {
            res.status(400).json({ error: "El reCAPTCHA de google no paso!" });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "Error interno del servidor, validador de token google!",
        });
    }
    const formData = {
        name,
        email,
        phone,
        message,
        recaptcha,
        status: false,
    };
    try {
        const resultDB = yield (0, formService_1.postForm)(formData);
        const resultSend = yield (0, emailController_1.sendContactEmail)({
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
        }
        else {
            res
                .status(500)
                .json({ message: "Error al guardar o enviar el formulario", resultDB: resultDB, resultSend: resultSend });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.postFormController = postFormController;
//# sourceMappingURL=formController.js.map