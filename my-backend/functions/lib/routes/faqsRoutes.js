"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faqsController_1 = require("../controllers/faqsController");
const router = (0, express_1.Router)();
router.get('/', faqsController_1.getFaqsController); //devuelve las preguntas frecuentes
exports.default = router;
//# sourceMappingURL=faqsRoutes.js.map