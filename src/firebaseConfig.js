// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Define firebaseConfig object FIRST
const firebaseConfig = {
  apiKey: "AIzaSyA5qlnnqu8CSuO2Ss28UfnA0xFBxEbkDso",
  authDomain: "groshop-cc80d.firebaseapp.com",
  projectId: "groshop-cc80d",
  storageBucket: "groshop-cc80d.appspot.com",
  messagingSenderId: "585671133962",
  appId: "1:585671133962:web:d36e752b497b64bb1ec8f3",
};

// ✅ Initialize app FIRST
const app = initializeApp(firebaseConfig);

// ✅ Then use app to initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Export properly
export { app, db, storage };
