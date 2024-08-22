import { Router } from 'express';
import { postFormController } from '../controllers/formController';

const router = Router();

router.post('/', postFormController); //guardo el formulario de contacto. Y envio email.

export default router;
