import { db } from '../config/config';
import { IFaqs } from '../model/faqs';

export const getFaqs = async (): Promise<IFaqs[] | null> => {
    try {
      const faqsRef = db.collection('faqs');
      const snapshot = await faqsRef.get();
      
      if (snapshot.empty) {
        return null;
      }
      
      const faqs: IFaqs[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as IFaqs));
      
      return faqs;
    } catch (error) {
      console.error('Error al obtener documentos', error);
      return null;
    }
  };
