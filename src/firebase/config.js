import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJZy3HO-4rZWPXEMHDY3gCVvWL73YZA_4",
  authDomain: "reading-list-e061d.firebaseapp.com",
  projectId: "reading-list-e061d",
  storageBucket: "reading-list-e061d.appspot.com",
  messagingSenderId: "362185302828",
  appId: "1:362185302828:web:ed677812f9774aa4e7c289",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

// Initialize Firebase Auth
const auth = getAuth();

export { db, auth };
