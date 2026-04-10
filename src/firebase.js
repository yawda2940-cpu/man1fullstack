// Mengimpor mesin utama Firebase
import { initializeApp } from "firebase/app";
// Mengimpor alat pemanggil Database (Firestore)
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

// Ini adalah KUNCI RAHASIA dari dashboard Firebase Anda
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// 1. Menyalakan koneksi Firebase di website kita
const app = initializeApp(firebaseConfig);

// 2. Menyalakan koneksi khusus ke Database
export const db = getFirestore(app);
export const auth = getAuth(app);
