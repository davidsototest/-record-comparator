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
exports.validateReCAPCHA = void 0;
const axios_1 = __importDefault(require("axios"));
const validateReCAPCHA = (recaptcha) => __awaiter(void 0, void 0, void 0, function* () {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    try {
        // Verifica el token de reCAPTCHA con la API de Google
        const response = yield axios_1.default.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`);
        if (response.data.success) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error('Error al consultar reCAPTCHA con Google:', error);
        return false;
    }
});
exports.validateReCAPCHA = validateReCAPCHA;
//# sourceMappingURL=validateReCAPCHA.js.map