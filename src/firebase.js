// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc6-O1XHLHqUfskTCvx2c6qCfTT5YXFuk",
  authDomain: "klassroom-c6aba.firebaseapp.com",
  projectId: "klassroom-c6aba",
  storageBucket: "klassroom-c6aba.appspot.com",
  messagingSenderId: "613445697061",
  appId: "1:613445697061:web:8fcffbad2d4a3f07f8c9cc",
  measurementId: "G-8MY1H1SEW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider};
export default getFirestore();