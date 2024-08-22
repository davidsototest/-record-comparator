import { Request, Response } from 'express';
import { getTestimonials } from '../services/testimonialsService';

export const getTestimonialsController = async (req: Request, res: Response) => {
    try {
        const data = await getTestimonials();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: error });
      }
};
