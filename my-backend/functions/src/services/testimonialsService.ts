import { db } from '../config/config';
import { ITestimonials } from '../model/testimonials';

export const getTestimonials = async (): Promise<ITestimonials[] | null> => {
    try {
      const faqsRef = db.collection('testimonials');
      const snapshot = await faqsRef.get();
      
      if (snapshot.empty) {
        return null;
      }
      
      const faqs: ITestimonials[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ITestimonials));
      
      return faqs;
    } catch (error) {
      console.error('Error al obtener documentos', error);
      return null;
    }
  };
