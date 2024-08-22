"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const incrementCounterController_1 = require("../controllers/incrementCounterController");
const router = (0, express_1.Router)();
router.post('/documents', incrementCounterController_1.postIncrementCountController); //incrementa la cantidad de archivos procesados. 
router.post('/likes', incrementCounterController_1.postIncrementLikesController); //incrementa la cantidad likes. 
exports.default = router;
//# sourceMappingURL=incrementCounterRoutes.js.map