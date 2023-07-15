import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCg13tKmlYKkJ-ktItk-59TRVUuY1S64N0",
  authDomain: "maltimart-63915.firebaseapp.com",
  projectId: "maltimart-63915",
  storageBucket: "maltimart-63915.appspot.com",
  messagingSenderId: "326668094782",
  appId: "1:326668094782:web:eda0cc1bec623fc4d2b06f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
