import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1VL7jMpYtOKAnXcviXB0N507TIGWWN38",
  authDomain: "skateshop-87184.firebaseapp.com",
  projectId: "skateshop-87184",
  storageBucket: "skateshop-87184.appspot.com",
  messagingSenderId: "499048460558",
  appId: "1:499048460558:web:f805d0199c64d05189a75f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)