import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCPsy4NYrQTW72-6-C7e1bQGNKH1bb7KEU",
    authDomain: "instagram-clone-c7acb.firebaseapp.com",
    projectId: "instagram-clone-c7acb",
    storageBucket: "instagram-clone-c7acb.appspot.com",
    messagingSenderId: "1019370205190",
    appId: "1:1019370205190:web:73b1fffa6a1f13a1be9387",
    measurementId: "G-Q9KHVPD4X4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage} ;

//   export default default;