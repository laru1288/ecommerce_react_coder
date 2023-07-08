import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-EgkEmR-FGty5I5Sq6j7eg2rkKkM4rCc",
  authDomain: "coderreact-cdd60.firebaseapp.com",
  projectId: "coderreact-cdd60",
  storageBucket: "coderreact-cdd60.appspot.com",
  messagingSenderId: "378477997131",
  appId: "1:378477997131:web:99a1bdc7e1d8706ffe31ce"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app) 