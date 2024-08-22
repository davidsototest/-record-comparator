"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonialesController_1 = require("../controllers/testimonialesController");
const router = (0, express_1.Router)();
router.get('/', testimonialesController_1.getTestimonialsController); //devuelve los testimonios
exports.default = router;
//# sourceMappingURL=testimonialsRoutes.js.map