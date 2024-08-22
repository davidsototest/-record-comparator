import { Response, Request } from "express";
import { getFaqs } from "../services/faqsServices";

export const getFaqsController = async (req: Request, res: Response) => {
  try {
    const data = await getFaqs();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
