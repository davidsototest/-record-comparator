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
exports.postForm = void 0;
const config_1 = require("../config/config");
const postForm = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formCollection = config_1.db.collection("form");
        yield formCollection.add(formData);
        return true;
    }
    catch (error) {
        console.error("Error al guardar el documento", error);
        return false;
    }
});
exports.postForm = postForm;
//# sourceMappingURL=formService.js.map