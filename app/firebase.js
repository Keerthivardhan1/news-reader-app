// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "news-reader-b894a.firebaseapp.com",
  projectId: "news-reader-b894a",
  storageBucket: "news-reader-b894a.appspot.com",
  messagingSenderId: "645883998207",
  appId: "1:645883998207:web:17b9c864f0c6a4f01e41ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);