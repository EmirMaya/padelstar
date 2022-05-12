// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzPlFAOq19YYUg2QElkvS8mkojuFffPKI",
    authDomain: "ecommercecoderhouse-20183.firebaseapp.com",
    projectId: "ecommercecoderhouse-20183",
    storageBucket: "ecommercecoderhouse-20183.appspot.com",
    messagingSenderId: "311264616381",
    appId: "1:311264616381:web:a501ef92e530254cd1fcd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const firestoreDb = getFirestore(app)