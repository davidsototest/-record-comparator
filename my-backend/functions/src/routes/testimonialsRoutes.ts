import { Router } from 'express';
import { getTestimonialsController } from '../controllers/testimonialesController';

const router = Router();

router.get('/', getTestimonialsController); //devuelve los testimonios

export default router;
