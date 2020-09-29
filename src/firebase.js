import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAeR77qfTSiW2UBOwoc8SRLURXHYEcAbgs",
    authDomain: "messenger-clone-kay.firebaseapp.com",
    databaseURL: "https://messenger-clone-kay.firebaseio.com",
    projectId: "messenger-clone-kay",
    storageBucket: "messenger-clone-kay.appspot.com",
    messagingSenderId: "361133775528",
    appId: "1:361133775528:web:7e7b2028226d658129c09d",
    measurementId: "G-ZEEF3X4TG3"
});

const db = firebaseApp.firestore();

export default db;
