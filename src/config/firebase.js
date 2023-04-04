import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDwmvrz1FprSh3eYJAK42_xGgCXW2xnDF4",
  authDomain: "tiktok---jornada-ebac-41ba4.firebaseapp.com",
  projectId: "tiktok---jornada-ebac-41ba4",
  storageBucket: "tiktok---jornada-ebac-41ba4.appspot.com",
  messagingSenderId: "639703555610",
  appId: "1:639703555610:web:8ccf56608ffa6e804dfba3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
