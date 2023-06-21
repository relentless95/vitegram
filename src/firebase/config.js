// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// to store the images
import { getStorage } from "firebase/storage";

// the database
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY;
const MESSAGING_SENDERID = import.meta.env.VITE_MESSAGING_SENDERID;
const APPID = import.meta.env.VITE_APPID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "vite-firegram.firebaseapp.com",
  projectId: "vite-firegram",
  storageBucket: "vite-firegram.appspot.com",
  messagingSenderId: MESSAGING_SENDERID,
  appId: APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
