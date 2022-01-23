// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCAXUas0KMiHpouKVJGtAdIaAR5gxz8Hy8",

  authDomain: "insta-v2-22a16.firebaseapp.com",

  projectId: "insta-v2-22a16",

  storageBucket: "insta-v2-22a16.appspot.com",

  messagingSenderId: "820198712987",

  appId: "1:820198712987:web:e02cc27eae7f6669a7883e",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
