import { Request, Response } from 'express';
import { getLikes, getProcessedDocuments } from '../services/indicatorsServices';

export const getIndicatorLikeController = async (req: Request, res: Response) => {
  try {
    const data = await getLikes('likes-users');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getIndicatorProcessedController = async (req: Request, res: Response) => {
  try {
    const data = await getProcessedDocuments('processed-documents');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
