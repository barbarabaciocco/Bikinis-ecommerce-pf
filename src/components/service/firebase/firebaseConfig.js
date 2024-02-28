import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-90tgIj4-c7l2w6UrJRtTGS0r1gSMTOw",
    authDomain: "ecommerce-bikinis.firebaseapp.com",
    projectId: "ecommerce-bikinis",
    storageBucket: "ecommerce-bikinis.appspot.com",
    messagingSenderId: "182282759411",
    appId: "1:182282759411:web:05112fba89e1a53f109b86"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)