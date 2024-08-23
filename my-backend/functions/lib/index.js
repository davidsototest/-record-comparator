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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const rate_limiter_flexible_1 = require("rate-limiter-flexible");
const indicatorsRoutes_1 = __importDefault(require("./routes/indicatorsRoutes"));
const formRoutes_1 = __importDefault(require("./routes/formRoutes"));
// import faqsRoutes from "./routes/faqsRoutes";
const incrementCounterRoutes_1 = __importDefault(require("./routes/incrementCounterRoutes"));
// import testimonialesRoutes from "./routes/testimonialsRoutes";
const errorHandler_1 = require("./middlewares/errorHandler");
const cors_1 = __importDefault(require("cors"));
const firebase_functions_1 = require("firebase-functions");
const app = (0, express_1.default)();
const corsOptions = {
    origin: [
        "http://localhost:3002",
        "https://comparadorregistros.web.app",
        "https://comparadorregistros.firebaseapp.com",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
// Configuración del rate limiter
const opts = {
    points: 6, // 6 petciones
    duration: 60, // en 60 segundos
};
const rateLimiter = new rate_limiter_flexible_1.RateLimiterMemory(opts);
// Middleware para aplicar el rate limiter
const rateLimiterMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield rateLimiter.consume((_a = req.ip) !== null && _a !== void 0 ? _a : "unknown");
        next();
    }
    catch (_b) {
        res.status(429).send("Peticiones limitadas");
    }
});
app.use(rateLimiterMiddleware);
app.use("/incrementCounter", incrementCounterRoutes_1.default);
app.use("/indicators", indicatorsRoutes_1.default);
// app.use("/faqs", faqsRoutes);
// app.use("/testimonials", testimonialesRoutes);
app.use("/form", formRoutes_1.default);
app.use(errorHandler_1.errorHandler);
// para probar en local
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Servidor corriendo en puerto ${port}`);
// });
exports.api = firebase_functions_1.https.onRequest(app);
//# sourceMappingURL=index.js.map