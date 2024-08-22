import { db } from "../config/config";

export const postIncrementCounter = async () => {
  try {
    const docRef = db.collection("indicators").doc("processed-documents");

    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(docRef);

      if (!doc.exists) {
        throw new Error("Documento no encontrado");
      }

      const currentCount = doc.data()?.count || 0;

      const newCount = currentCount + 1;

      transaction.update(docRef, { count: newCount });
    });

    console.log("Contador incrementado con éxito");
  } catch (error) {
    console.error("Error al incrementar el contador: incrementCounterService: ", error);
  }
};

export const postIncrementLikes = async () => {
  try {
    const docRef = db.collection("indicators").doc("likes-users");

    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(docRef);

      if (!doc.exists) {
        throw new Error("Documento no encontrado");
      }

      const currentCount = doc.data()?.count || 0;

      const newCount = currentCount + 1;

      transaction.update(docRef, { count: newCount });
    });

    console.log("Likes incrementado con éxito");
  } catch (error) {
    console.error("Error al incrementar el contador: incrementLikesService: ", error);
  }
};
