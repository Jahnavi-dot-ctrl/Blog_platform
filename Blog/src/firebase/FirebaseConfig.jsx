// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-jWTGOBlhCnUTppiOvmjo3buTbT1UZcc",
  authDomain: "myblog-1dece.firebaseapp.com",
  projectId: "myblog-1dece",
  storageBucket: "myblog-1dece.appspot.com",
  messagingSenderId: "587045447896",
  appId: "1:587045447896:web:bbfa775f46238fe1100fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}