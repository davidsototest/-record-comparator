import { db } from '../config/config';
import { IIndicator } from '../model/indicator';

export const getLikes = async (id: string): Promise<IIndicator | null> => {
  const userRef = db.collection('indicators').doc(id);
  const doc = await userRef.get();
  if (!doc.exists) {
    return null;
  }
  return { id: doc.id, ...doc.data() } as IIndicator;
};

export const getProcessedDocuments = async (id: string): Promise<IIndicator | null> => {
  const userRef = db.collection('indicators').doc(id);
  const doc = await userRef.get();
  if (!doc.exists) {
    return null;
  }
  return { id: doc.id, ...doc.data() } as IIndicator;
};
