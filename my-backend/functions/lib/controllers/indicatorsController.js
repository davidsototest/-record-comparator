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
exports.getIndicatorProcessedController = exports.getIndicatorLikeController = void 0;
const indicatorsServices_1 = require("../services/indicatorsServices");
const getIndicatorLikeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, indicatorsServices_1.getLikes)('likes-users');
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getIndicatorLikeController = getIndicatorLikeController;
const getIndicatorProcessedController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, indicatorsServices_1.getProcessedDocuments)('processed-documents');
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getIndicatorProcessedController = getIndicatorProcessedController;
//# sourceMappingURL=indicatorsController.js.map