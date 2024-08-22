"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indicatorsController_1 = require("../controllers/indicatorsController");
const router = (0, express_1.Router)();
router.get('/likes', indicatorsController_1.getIndicatorLikeController); //devuelve la cantidad de likes del sitio
router.get('/processed', indicatorsController_1.getIndicatorProcessedController); //devuelve la cantidad de archivos procesados
exports.default = router;
//# sourceMappingURL=indicatorsRoutes.js.map