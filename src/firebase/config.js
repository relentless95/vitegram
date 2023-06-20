// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// to store the images
import { getStorage } from "firebase/storage";

// the database
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-EARfHzY5RNJJ-o2g8o2tingDlbjSNHM",
  authDomain: "vite-firegram.firebaseapp.com",
  projectId: "vite-firegram",
  storageBucket: "vite-firegram.appspot.com",
  messagingSenderId: "894947932699",
  appId: "1:894947932699:web:193d2f8d612a4b563196be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
