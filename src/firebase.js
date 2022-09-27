// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtwRadRYXeUC7FjLSU7wpiotXQXsiGb7Y",
  authDomain: "vuetifydemo-84085.firebaseapp.com",
  projectId: "vuetifydemo-84085",
  storageBucket: "vuetifydemo-84085.appspot.com",
  messagingSenderId: "964790613354",
  appId: "1:964790613354:web:50b9ccee9b5ffbab5fe113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
export const db = getFirestore(app);
