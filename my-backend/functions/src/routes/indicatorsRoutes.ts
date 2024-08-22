import { Router } from 'express';
import { getIndicatorLikeController, getIndicatorProcessedController } from '../controllers/indicatorsController';

const router = Router();

router.get('/likes', getIndicatorLikeController); //devuelve la cantidad de likes del sitio
router.get('/processed', getIndicatorProcessedController); //devuelve la cantidad de archivos procesados

export default router;
