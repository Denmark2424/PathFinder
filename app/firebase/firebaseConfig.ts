import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC76R5ZWaz6EfIxIEQ_DLOQ1uNdbtRA4DI",
    authDomain: "login-register-firebase-165d5.firebaseapp.com",
    projectId: "login-register-firebase-165d5",
    storageBucket: "login-register-firebase-165d5.firebasestorage.app",
    messagingSenderId: "707709117207",
    appId: "1:707709117207:web:f26c5888b93514aa8f0d52"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };