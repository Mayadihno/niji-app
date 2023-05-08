// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkf6aZrqpXqiC6A6W0tRNokxVVq-WH0ig",
  authDomain: "bazer-react.firebaseapp.com",
  projectId: "bazer-react",
  storageBucket: "bazer-react.appspot.com",
  messagingSenderId: "818976991507",
  appId: "1:818976991507:web:332473233c1cd3fb3e12e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
