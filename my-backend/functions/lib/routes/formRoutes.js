"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = require("../controllers/formController");
const router = (0, express_1.Router)();
router.post('/', formController_1.postFormController); //guardo el formulario de contacto. Y envio email.
exports.default = router;
//# sourceMappingURL=formRoutes.js.map