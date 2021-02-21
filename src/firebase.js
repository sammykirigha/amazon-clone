import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD8AGY61pej0ZfsU2LcN7obnCWgYXEq3TQ",
    authDomain: "clone-5775a.firebaseapp.com",
    projectId: "clone-5775a",
    storageBucket: "clone-5775a.appspot.com",
    messagingSenderId: "263539039993",
    appId: "1:263539039993:web:8de09661ec5da664e68c28",
    measurementId: "G-PP8YTB7WCW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };