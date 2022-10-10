// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQTm_48I8foAJL3JEu2kp-k_fLm_yS0JA",
  authDomain: "react-project-77382.firebaseapp.com",
  projectId: "react-project-77382",
  storageBucket: "react-project-77382.appspot.com",
  messagingSenderId: "420408455824",
  appId: "1:420408455824:web:7ae15010858e9d79a1de15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
