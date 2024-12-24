
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyB3aN1szXt7GcRXhhc-NEKlJlBrpnRczcM",
    authDomain: "clone-f881b.firebaseapp.com",
    projectId: "clone-f881b",
    storageBucket: "clone-f881b.appspot.com",
    messagingSenderId: "24480424042",
    appId: "1:24480424042:web:ea3381c5e51915a9586a13",
    measurementId: "G-YS3D2J8EF8"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = app.firestore();

export { auth, db};