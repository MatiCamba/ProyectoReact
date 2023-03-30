// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMYpVsZ1dUkjqlqXmGN8Omc18UHTVJ7bo",
    authDomain: "muebleria-6be4d.firebaseapp.com",
    projectId: "muebleria-6be4d",
    storageBucket: "muebleria-6be4d.appspot.com",
    messagingSenderId: "802328225377",
    appId: "1:802328225377:web:a2a182e4a440049dbbac20",
    measurementId: "G-RQ2MN5V7Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
