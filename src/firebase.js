// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPKCSIBXoC6CjNhy7cdPwsKdZz_W8T9Bo",
  authDomain: "orucpen-4bce0.firebaseapp.com",
  projectId: "orucpen-4bce0",
  storageBucket: "orucpen-4bce0.appspot.com",
  messagingSenderId: "844652141074",
  appId: "1:844652141074:web:13290b00023e65d58416cb",
  measurementId: "G-75CJ8VSCE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
