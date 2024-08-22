import { Request, Response } from 'express';
import { postIncrementCounter, postIncrementLikes } from '../services/incrementCounterService';

export const postIncrementCountController = async (req: Request, res: Response) => {
  try {
    await postIncrementCounter();
    res.status(200).json({ message: 'Contador incrementado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error || 'Error interno del servidor' });
  }
};

export const postIncrementLikesController = async (req: Request, res: Response) => {
  try {
    await postIncrementLikes();
    res.status(200).json({ message: 'Likes incrementado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error || 'Error interno del servidor' });
  }
};
