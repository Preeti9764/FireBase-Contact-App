// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2cgHFqcqdSUMUWxtZSnEynfEwwBmpWo",
  authDomain: "contactapp-fd106.firebaseapp.com",
  projectId: "contactapp-fd106",
  storageBucket: "contactapp-fd106.firebasestorage.app",
  messagingSenderId: "276236393467",
  appId: "1:276236393467:web:18edd18c8c2dc5aa17495e",
  measurementId: "G-W2P608YNFT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);