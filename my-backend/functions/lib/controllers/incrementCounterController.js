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
exports.postIncrementLikesController = exports.postIncrementCountController = void 0;
const incrementCounterService_1 = require("../services/incrementCounterService");
const postIncrementCountController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, incrementCounterService_1.postIncrementCounter)();
        res.status(200).json({ message: 'Contador incrementado con éxito' });
    }
    catch (error) {
        res.status(500).json({ error: error || 'Error interno del servidor' });
    }
});
exports.postIncrementCountController = postIncrementCountController;
const postIncrementLikesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, incrementCounterService_1.postIncrementLikes)();
        res.status(200).json({ message: 'Likes incrementado con éxito' });
    }
    catch (error) {
        res.status(500).json({ error: error || 'Error interno del servidor' });
    }
});
exports.postIncrementLikesController = postIncrementLikesController;
//# sourceMappingURL=incrementCounterController.js.map