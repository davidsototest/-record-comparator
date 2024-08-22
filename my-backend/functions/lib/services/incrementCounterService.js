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
exports.postIncrementLikes = exports.postIncrementCounter = void 0;
const config_1 = require("../config/config");
const postIncrementCounter = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = config_1.db.collection("indicators").doc("processed-documents");
        yield config_1.db.runTransaction((transaction) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const doc = yield transaction.get(docRef);
            if (!doc.exists) {
                throw new Error("Documento no encontrado");
            }
            const currentCount = ((_a = doc.data()) === null || _a === void 0 ? void 0 : _a.count) || 0;
            const newCount = currentCount + 1;
            transaction.update(docRef, { count: newCount });
        }));
        console.log("Contador incrementado con éxito");
    }
    catch (error) {
        console.error("Error al incrementar el contador: incrementCounterService: ", error);
    }
});
exports.postIncrementCounter = postIncrementCounter;
const postIncrementLikes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = config_1.db.collection("indicators").doc("likes-users");
        yield config_1.db.runTransaction((transaction) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const doc = yield transaction.get(docRef);
            if (!doc.exists) {
                throw new Error("Documento no encontrado");
            }
            const currentCount = ((_a = doc.data()) === null || _a === void 0 ? void 0 : _a.count) || 0;
            const newCount = currentCount + 1;
            transaction.update(docRef, { count: newCount });
        }));
        console.log("Likes incrementado con éxito");
    }
    catch (error) {
        console.error("Error al incrementar el contador: incrementLikesService: ", error);
    }
});
exports.postIncrementLikes = postIncrementLikes;
//# sourceMappingURL=incrementCounterService.js.map