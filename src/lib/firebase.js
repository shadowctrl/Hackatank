import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOrQXy8UA0Qm2bwpXngf54P85gVc-pChM",
  authDomain: "hackatank-1834c.firebaseapp.com",
  projectId: "hackatank-1834c",
  storageBucket: "hackatank-1834c.appspot.com",
  messagingSenderId: "986553465308",
  appId: "1:986553465308:web:8b8a8b3ced07911e00f719",
  measurementId: "G-2677BE5L48",
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
