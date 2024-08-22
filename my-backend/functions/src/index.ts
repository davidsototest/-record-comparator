import express from "express";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { Request } from 'express';
import indicatorsRoutes from "./routes/indicatorsRoutes";
import formRoutes from './routes/formRoutes'
// import faqsRoutes from "./routes/faqsRoutes";
import incrementCounterRoutes from "./routes/incrementCounterRoutes";
// import testimonialesRoutes from "./routes/testimonialsRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";
import { https } from 'firebase-functions';

const app = express();

const corsOptions = {
  origin: ["http://localhost:3002", "https://grupo12-f7def.web.app"],
  methods: ["GET", "POST"],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Configuración del rate limiter
const opts = {
  points: 6, // 6 petciones 
  duration: 60, // en 60 segundos
};

const rateLimiter = new RateLimiterMemory(opts);

// Middleware para aplicar el rate limiter
const rateLimiterMiddleware = async (req: Request, res: express.Response, next: express.NextFunction) => {
  try {
    await rateLimiter.consume(req.ip ?? 'unknown');
    next();
  } catch {
    res.status(429).send('Peticiones limitadas');
  }
};

app.use(rateLimiterMiddleware);

app.use("/incrementCounter", incrementCounterRoutes);
app.use("/indicators", indicatorsRoutes);
// app.use("/faqs", faqsRoutes);
// app.use("/testimonials", testimonialesRoutes);
app.use("/form", formRoutes);

app.use(errorHandler);

// para probar en local
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Servidor corriendo en puerto ${port}`);
// });

export const api = https.onRequest(app);