// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP02PC8ud54Yab-mIOIiWAVIGgO_0TjX8",
  authDomain: "srmvec-csi-hackathon.firebaseapp.com",
  projectId: "srmvec-csi-hackathon",
  storageBucket: "srmvec-csi-hackathon.appspot.com",
  messagingSenderId: "224197342451",
  appId: "1:224197342451:web:0feaf3f25fcf70983cb386",
  measurementId: "G-DCQ5G39QKB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
