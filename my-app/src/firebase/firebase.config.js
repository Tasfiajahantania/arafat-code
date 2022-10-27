// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMjQ5BPpVw1_vAR_evrsOQvRU8Cv05oNI",
    authDomain: "codelab-ae9a1.firebaseapp.com",
    projectId: "codelab-ae9a1",
    storageBucket: "codelab-ae9a1.appspot.com",
    messagingSenderId: "592818226311",
    appId: "1:592818226311:web:07308e8ff7f34da4caa422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;