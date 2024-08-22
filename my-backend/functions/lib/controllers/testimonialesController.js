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
exports.getTestimonialsController = void 0;
const testimonialsService_1 = require("../services/testimonialsService");
const getTestimonialsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, testimonialsService_1.getTestimonials)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getTestimonialsController = getTestimonialsController;
//# sourceMappingURL=testimonialesController.js.map