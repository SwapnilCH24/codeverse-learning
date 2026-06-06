import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgCpVHMoe4_jl-kRQ0yd_Ho2pREZu_0UY",
  authDomain: "codeverse-learning.firebaseapp.com",
  projectId: "codeverse-learning",
  storageBucket: "codeverse-learning.firebasestorage.app",
  messagingSenderId: "741036922008",
  appId: "1:741036922008:web:b9473d86a98e0d993eaced",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export { app };