// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc_sYDAypbaWcEmXGWdO_SE41g5PKwnxo",
  authDomain: "auth-1e169.firebaseapp.com",
  projectId: "auth-1e169",
  storageBucket: "auth-1e169.appspot.com",
  messagingSenderId: "687442961357",
  appId: "1:687442961357:web:17196803e2637b1d96da84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)