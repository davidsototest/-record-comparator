import { Router } from 'express';
import {getFaqsController} from '../controllers/faqsController';

const router = Router();

router.get('/', getFaqsController); //devuelve las preguntas frecuentes

export default router;
