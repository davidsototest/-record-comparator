import { Router } from 'express';
import { postIncrementCountController, postIncrementLikesController } from '../controllers/incrementCounterController';

const router = Router();

router.post('/documents', postIncrementCountController); //incrementa la cantidad de archivos procesados. 
router.post('/likes', postIncrementLikesController); //incrementa la cantidad likes. 

export default router;
