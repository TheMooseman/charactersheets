// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_API,
  authDomain: process.env.REACT_APP_FIRE_AUTH,
  projectId: process.env.REACT_APP_FIRE_PROJID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING,
  appId: process.env.REACT_APP_FIRE_APPID,
  measurementId: process.env.REACT_APP_FIRE_MEASURE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();