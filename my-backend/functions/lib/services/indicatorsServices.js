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
exports.getProcessedDocuments = exports.getLikes = void 0;
const config_1 = require("../config/config");
const getLikes = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRef = config_1.db.collection('indicators').doc(id);
    const doc = yield userRef.get();
    if (!doc.exists) {
        return null;
    }
    return Object.assign({ id: doc.id }, doc.data());
});
exports.getLikes = getLikes;
const getProcessedDocuments = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRef = config_1.db.collection('indicators').doc(id);
    const doc = yield userRef.get();
    if (!doc.exists) {
        return null;
    }
    return Object.assign({ id: doc.id }, doc.data());
});
exports.getProcessedDocuments = getProcessedDocuments;
//# sourceMappingURL=indicatorsServices.js.map