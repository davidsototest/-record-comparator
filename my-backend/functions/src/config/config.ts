import { Firestore, getFirestore } from 'firebase-admin/firestore';
import * as serviceAccount from '../config/comparadorregistros-firebase-adminsdk-upp2p-44353e4dd8.json';
import * as admin from 'firebase-admin'

// Verifica el tipo del objeto serviceAccount
const serviceAccountConfig = serviceAccount as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountConfig)
});

// export const db = getFirestore();
export const db: Firestore = getFirestore();

export const config = {
  port: process.env.PORT || 3000,
};
